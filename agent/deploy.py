#!/usr/bin/env python3
"""Deploy Sarah (Strands Restart adviser) to Bedrock AgentCore Runtime.

Pipeline:
  1. Package source into a zip, upload to a scratch S3 bucket.
  2. Build linux/arm64 image with AWS CodeBuild, push to ECR.
  3. Create / update the AgentCore Runtime to point at the new image.
  4. Create / reuse a Cognito user pool + classic-auth client for the browser.
  5. Write deploy-output.json with every id the frontend needs.

Re-running is idempotent. Designed for AWS account 593804350786 / us-west-2.
"""
import json
import os
import shutil
import subprocess
import sys
import time
import uuid
import zipfile
from pathlib import Path

import boto3
from botocore.exceptions import ClientError

REGION = "us-west-2"
os.environ["AWS_REGION"] = REGION
os.environ["AWS_DEFAULT_REGION"] = REGION
ACCOUNT = boto3.client("sts").get_caller_identity()["Account"]

NAME = "restart_adviser"
ECR_REPO = "restart-adviser"
ROLE_NAME = "restart-adviser-agentcore-role"
CODEBUILD_PROJECT = "restart-adviser-build"
CODEBUILD_ROLE = "restart-adviser-codebuild-role"
SCRATCH_BUCKET = f"restart-adviser-build-{ACCOUNT}-{REGION}"
COGNITO_POOL_NAME = "restart-adviser-pool"
COGNITO_CLIENT_NAME = "restart-adviser-client"
COGNITO_DEMO_USER = "Admin"
COGNITO_DEMO_PASSWORD = "MaxRestart2026"

HERE = Path(__file__).parent
OUTPUT_PATH = HERE / "deploy-output.json"

iam = boto3.client("iam", region_name=REGION)
ecr = boto3.client("ecr", region_name=REGION)
s3 = boto3.client("s3", region_name=REGION)
cb = boto3.client("codebuild", region_name=REGION)
logs = boto3.client("logs", region_name=REGION)
ac = boto3.client("bedrock-agentcore-control", region_name=REGION)
cog = boto3.client("cognito-idp", region_name=REGION)


# ---------- helpers ----------
def log(msg):
    print(f"[deploy] {msg}", flush=True)


def ensure_ecr_repo():
    try:
        ecr.create_repository(repositoryName=ECR_REPO, imageScanningConfiguration={"scanOnPush": True})
        log(f"created ECR repo {ECR_REPO}")
    except ecr.exceptions.RepositoryAlreadyExistsException:
        log(f"ECR repo {ECR_REPO} already exists")
    return f"{ACCOUNT}.dkr.ecr.{REGION}.amazonaws.com/{ECR_REPO}"


def ensure_scratch_bucket():
    try:
        if REGION == "us-east-1":
            s3.create_bucket(Bucket=SCRATCH_BUCKET)
        else:
            s3.create_bucket(Bucket=SCRATCH_BUCKET, CreateBucketConfiguration={"LocationConstraint": REGION})
        log(f"created scratch bucket {SCRATCH_BUCKET}")
    except ClientError as e:
        if e.response["Error"]["Code"] in ("BucketAlreadyOwnedByYou", "BucketAlreadyExists"):
            log(f"scratch bucket {SCRATCH_BUCKET} ready")
        else:
            raise


def upload_source():
    z = HERE / "build-source.zip"
    if z.exists():
        z.unlink()
    files = ["Dockerfile", "agentcore_app.py", "tools.py", "state.py", "requirements-runtime.txt"]
    with zipfile.ZipFile(z, "w", zipfile.ZIP_DEFLATED) as zf:
        for f in files:
            zf.write(HERE / f, arcname=f)
        zf.writestr("buildspec.yml", BUILDSPEC)
    key = f"build-{uuid.uuid4().hex[:8]}.zip"
    s3.upload_file(str(z), SCRATCH_BUCKET, key)
    z.unlink()
    log(f"uploaded source to s3://{SCRATCH_BUCKET}/{key}")
    return key


BUILDSPEC = """version: 0.2
phases:
  pre_build:
    commands:
      - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $ECR_URI
  build:
    commands:
      - docker build --platform linux/arm64 -t $ECR_URI:latest .
  post_build:
    commands:
      - docker push $ECR_URI:latest
"""


def ensure_codebuild_role():
    trust = {
        "Version": "2012-10-17",
        "Statement": [{"Effect": "Allow", "Principal": {"Service": "codebuild.amazonaws.com"}, "Action": "sts:AssumeRole"}],
    }
    try:
        role = iam.create_role(
            RoleName=CODEBUILD_ROLE,
            AssumeRolePolicyDocument=json.dumps(trust),
            Description="CodeBuild role for restart-adviser image builds",
        )["Role"]
        log(f"created role {CODEBUILD_ROLE}")
    except iam.exceptions.EntityAlreadyExistsException:
        role = iam.get_role(RoleName=CODEBUILD_ROLE)["Role"]
    policy = {
        "Version": "2012-10-17",
        "Statement": [
            {"Effect": "Allow", "Action": ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"], "Resource": "*"},
            {"Effect": "Allow", "Action": ["s3:GetObject", "s3:GetObjectVersion"], "Resource": f"arn:aws:s3:::{SCRATCH_BUCKET}/*"},
            {"Effect": "Allow", "Action": ["ecr:GetAuthorizationToken"], "Resource": "*"},
            {"Effect": "Allow", "Action": [
                "ecr:BatchCheckLayerAvailability", "ecr:CompleteLayerUpload", "ecr:InitiateLayerUpload",
                "ecr:PutImage", "ecr:UploadLayerPart", "ecr:BatchGetImage", "ecr:GetDownloadUrlForLayer",
            ], "Resource": f"arn:aws:ecr:{REGION}:{ACCOUNT}:repository/{ECR_REPO}"},
        ],
    }
    iam.put_role_policy(RoleName=CODEBUILD_ROLE, PolicyName="inline", PolicyDocument=json.dumps(policy))
    # Wait for IAM role to be assumable
    log("waiting 12s for IAM role propagation")
    time.sleep(12)
    return role["Arn"]


def _create_project_with_retry(kwargs):
    """CreateProject can race the IAM trust policy. Retry on the 'not authorized' input."""
    for attempt in range(8):
        try:
            cb.create_project(**kwargs)
            return
        except cb.exceptions.InvalidInputException as e:
            if "sts:AssumeRole" in str(e):
                log(f"  CodeBuild AssumeRole not ready, retry {attempt+1}/8")
                time.sleep(10)
                continue
            raise


def ensure_codebuild_project(role_arn, ecr_uri):
    env = {
        "type": "ARM_CONTAINER",
        "image": "aws/codebuild/amazonlinux-aarch64-standard:3.0",
        "computeType": "BUILD_GENERAL1_SMALL",
        "privilegedMode": True,
        "environmentVariables": [
            {"name": "AWS_DEFAULT_REGION", "value": REGION},
            {"name": "ECR_URI", "value": ecr_uri},
        ],
    }
    try:
        _create_project_with_retry(dict(
            name=CODEBUILD_PROJECT,
            source={"type": "S3", "location": f"{SCRATCH_BUCKET}/dummy.zip", "buildspec": "buildspec.yml"},
            artifacts={"type": "NO_ARTIFACTS"},
            environment=env,
            serviceRole=role_arn,
            timeoutInMinutes=20,
        ))
        log(f"created CodeBuild project {CODEBUILD_PROJECT}")
    except cb.exceptions.ResourceAlreadyExistsException:
        cb.update_project(
            name=CODEBUILD_PROJECT,
            environment=env,
            serviceRole=role_arn,
        )
        log(f"updated CodeBuild project {CODEBUILD_PROJECT}")


def run_codebuild(source_key):
    log("starting CodeBuild...")
    build = cb.start_build(
        projectName=CODEBUILD_PROJECT,
        sourceLocationOverride=f"{SCRATCH_BUCKET}/{source_key}",
        sourceTypeOverride="S3",
    )["build"]
    bid = build["id"]
    while True:
        time.sleep(8)
        b = cb.batch_get_builds(ids=[bid])["builds"][0]
        log(f"  build phase={b.get('currentPhase')} status={b.get('buildStatus')}")
        if b.get("buildStatus") and b["buildStatus"] != "IN_PROGRESS":
            if b["buildStatus"] != "SUCCEEDED":
                stream = b.get("logs", {}).get("streamName")
                group = b.get("logs", {}).get("groupName")
                if group and stream:
                    log(f"  failed. tail of {group}/{stream}:")
                    events = logs.get_log_events(logGroupName=group, logStreamName=stream, limit=40, startFromHead=False)["events"]
                    for e in events:
                        print("    " + e["message"].rstrip())
                raise SystemExit(f"CodeBuild failed: {b['buildStatus']}")
            return


def ensure_agent_role(ecr_uri):
    trust = {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {"Service": "bedrock-agentcore.amazonaws.com"},
                "Action": "sts:AssumeRole",
                "Condition": {
                    "StringEquals": {"aws:SourceAccount": ACCOUNT},
                    "ArnLike": {"aws:SourceArn": f"arn:aws:bedrock-agentcore:{REGION}:{ACCOUNT}:*"},
                },
            }
        ],
    }
    try:
        role = iam.create_role(
            RoleName=ROLE_NAME,
            AssumeRolePolicyDocument=json.dumps(trust),
            Description="Execution role for restart-adviser AgentCore runtime",
        )["Role"]
        log(f"created role {ROLE_NAME}")
    except iam.exceptions.EntityAlreadyExistsException:
        role = iam.get_role(RoleName=ROLE_NAME)["Role"]
        iam.update_assume_role_policy(RoleName=ROLE_NAME, PolicyDocument=json.dumps(trust))
    policy = {
        "Version": "2012-10-17",
        "Statement": [
            {"Effect": "Allow", "Action": [
                "bedrock:InvokeModel", "bedrock:InvokeModelWithResponseStream",
                "bedrock:Converse", "bedrock:ConverseStream",
            ], "Resource": "*"},
            {"Effect": "Allow", "Action": [
                "ecr:GetAuthorizationToken", "ecr:BatchCheckLayerAvailability",
                "ecr:GetDownloadUrlForLayer", "ecr:BatchGetImage",
            ], "Resource": "*"},
            {"Effect": "Allow", "Action": [
                "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents",
                "logs:DescribeLogStreams", "logs:DescribeLogGroups",
            ], "Resource": "*"},
            {"Effect": "Allow", "Action": [
                "bedrock-agentcore:GetWorkloadAccessToken",
                "bedrock-agentcore:GetWorkloadAccessTokenForJWT",
                "bedrock-agentcore:GetWorkloadAccessTokenForUserId",
            ], "Resource": "*"},
        ],
    }
    iam.put_role_policy(RoleName=ROLE_NAME, PolicyName="inline", PolicyDocument=json.dumps(policy))
    # IAM role propagation
    time.sleep(8)
    return role["Arn"]


def upsert_runtime(role_arn, ecr_uri, jwt_authorizer=None):
    artifact = {"containerConfiguration": {"containerUri": f"{ecr_uri}:latest"}}
    env_vars = {"AWS_REGION": REGION, "MODEL_ID": "us.amazon.nova-pro-v1:0"}
    kwargs = dict(
        agentRuntimeArtifact=artifact,
        roleArn=role_arn,
        networkConfiguration={"networkMode": "PUBLIC"},
        environmentVariables=env_vars,
    )
    if jwt_authorizer:
        kwargs["authorizerConfiguration"] = {"customJWTAuthorizer": jwt_authorizer}
    # find existing
    existing = None
    for r in ac.list_agent_runtimes().get("agentRuntimes", []):
        if r["agentRuntimeName"] == NAME:
            existing = r
            break
    if existing:
        rid = existing["agentRuntimeId"]
        log(f"updating existing runtime {rid}")
        ac.update_agent_runtime(agentRuntimeId=rid, **kwargs)
    else:
        log("creating new runtime")
        created = ac.create_agent_runtime(agentRuntimeName=NAME, **kwargs)
        rid = created["agentRuntimeId"]
    # wait READY
    for _ in range(60):
        time.sleep(5)
        info = ac.get_agent_runtime(agentRuntimeId=rid)
        log(f"  runtime status={info['status']}")
        if info["status"] == "READY":
            return info
        if info["status"] in ("CREATE_FAILED", "UPDATE_FAILED"):
            raise SystemExit(f"runtime ended in {info['status']}")
    raise SystemExit("runtime did not reach READY in time")


def ensure_cognito():
    # Pool
    pool_id = None
    for p in cog.list_user_pools(MaxResults=60).get("UserPools", []):
        if p["Name"] == COGNITO_POOL_NAME:
            pool_id = p["Id"]
            break
    if not pool_id:
        pool = cog.create_user_pool(
            PoolName=COGNITO_POOL_NAME,
            Policies={"PasswordPolicy": {"MinimumLength": 8, "RequireUppercase": True, "RequireLowercase": True, "RequireNumbers": True, "RequireSymbols": False}},
            AdminCreateUserConfig={"AllowAdminCreateUserOnly": True},
        )
        pool_id = pool["UserPool"]["Id"]
        log(f"created Cognito pool {pool_id}")
    else:
        log(f"reusing Cognito pool {pool_id}")
    # Client (classic flow ADMIN_USER_PASSWORD_AUTH so we can sign in headlessly)
    client_id = None
    for c in cog.list_user_pool_clients(UserPoolId=pool_id, MaxResults=60).get("UserPoolClients", []):
        if c["ClientName"] == COGNITO_CLIENT_NAME:
            client_id = c["ClientId"]
            break
    if not client_id:
        cl = cog.create_user_pool_client(
            UserPoolId=pool_id,
            ClientName=COGNITO_CLIENT_NAME,
            GenerateSecret=False,
            ExplicitAuthFlows=["ALLOW_USER_PASSWORD_AUTH", "ALLOW_ADMIN_USER_PASSWORD_AUTH", "ALLOW_REFRESH_TOKEN_AUTH"],
        )
        client_id = cl["UserPoolClient"]["ClientId"]
        log(f"created Cognito client {client_id}")
    # Identity pool not needed; AgentCore InvokeAgentRuntime accepts a Cognito JWT (bearerToken).
    # Demo user
    try:
        cog.admin_create_user(
            UserPoolId=pool_id,
            Username=COGNITO_DEMO_USER,
            MessageAction="SUPPRESS",
            TemporaryPassword=COGNITO_DEMO_PASSWORD + "Tmp",
        )
        log(f"created demo user {COGNITO_DEMO_USER}")
    except cog.exceptions.UsernameExistsException:
        pass
    try:
        cog.admin_set_user_password(
            UserPoolId=pool_id,
            Username=COGNITO_DEMO_USER,
            Password=COGNITO_DEMO_PASSWORD,
            Permanent=True,
        )
    except ClientError as e:
        log(f"set password: {e}")
    return pool_id, client_id


def main():
    log(f"region={REGION} account={ACCOUNT}")
    ensure_scratch_bucket()
    ecr_uri = ensure_ecr_repo()
    cb_role_arn = ensure_codebuild_role()
    ensure_codebuild_project(cb_role_arn, ecr_uri)
    src_key = upload_source()
    run_codebuild(src_key)
    agent_role_arn = ensure_agent_role(ecr_uri)
    pool_id, client_id = ensure_cognito()
    issuer = f"https://cognito-idp.{REGION}.amazonaws.com/{pool_id}"
    jwt_authorizer = {"discoveryUrl": f"{issuer}/.well-known/openid-configuration", "allowedClients": [client_id]}
    runtime = upsert_runtime(agent_role_arn, ecr_uri, jwt_authorizer=jwt_authorizer)

    out = {
        "region": REGION,
        "account": ACCOUNT,
        "agent_runtime_arn": runtime["agentRuntimeArn"],
        "agent_runtime_id": runtime["agentRuntimeId"],
        "agent_runtime_name": NAME,
        "ecr_uri": ecr_uri,
        "cognito_user_pool_id": pool_id,
        "cognito_client_id": client_id,
        "cognito_demo_user": COGNITO_DEMO_USER,
        "cognito_demo_password": COGNITO_DEMO_PASSWORD,
    }
    OUTPUT_PATH.write_text(json.dumps(out, indent=2))
    log("DONE")
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
