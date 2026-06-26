#!/usr/bin/env python3
"""Deploy the Restart Journey sim to S3 + CloudFront.

Pipeline (idempotent):
  1. Ensure Cognito user 'Admin' exists with permanent password.
  2. Regenerate adviser-config.js with that user.
  3. Create / reuse private S3 bucket.
  4. Create / reuse CloudFront distribution with Origin Access Control.
  5. Sync site files to S3, invalidate CloudFront.
  6. Print the CloudFront URL.
"""
import json
import mimetypes
import os
import time
from pathlib import Path

import boto3
from botocore.exceptions import ClientError

REGION = "us-west-2"
os.environ["AWS_REGION"] = REGION
os.environ["AWS_DEFAULT_REGION"] = REGION
ACCOUNT = boto3.client("sts").get_caller_identity()["Account"]

ROOT = Path(__file__).parent
DEPLOY_OUT = ROOT / "agent" / "deploy-output.json"
CFG_JS = ROOT / "adviser-config.js"

BUCKET = f"restart-journey-sim-{ACCOUNT}"
OAC_NAME = "restart-journey-sim-oac"
DIST_TAG = "restart-journey-sim"

COG_USER = "Admin"
COG_PASSWORD = "MaxRestart2026"

FILES_TO_UPLOAD = [
    "index.html",
    "adviser-bundle.js",
    "adviser-config.js",
    "persona-runtime.json",
    "graph-neighbours.json",
]

# Subdirectories whose contents are uploaded with their original relative paths.
DIRS_TO_UPLOAD = [
    "audio",
]

s3 = boto3.client("s3", region_name=REGION)
cf = boto3.client("cloudfront")
cog = boto3.client("cognito-idp", region_name=REGION)


def log(m):
    print(f"[web-deploy] {m}", flush=True)


def deploy_output():
    return json.loads(DEPLOY_OUT.read_text())


def ensure_cognito_user(pool_id):
    try:
        cog.admin_create_user(
            UserPoolId=pool_id,
            Username=COG_USER,
            MessageAction="SUPPRESS",
            TemporaryPassword=COG_PASSWORD + "Tmp1!",
        )
        log(f"created Cognito user {COG_USER}")
    except cog.exceptions.UsernameExistsException:
        log(f"reusing Cognito user {COG_USER}")
    cog.admin_set_user_password(
        UserPoolId=pool_id,
        Username=COG_USER,
        Password=COG_PASSWORD,
        Permanent=True,
    )
    log("password set permanent")


def write_config(d):
    # No credentials baked in. Users sign in via the in-app overlay.
    js = (
        "window.ADVISER_CONFIG = {\n"
        f'  region: "{d["region"]}",\n'
        f'  agentRuntimeArn: "{d["agent_runtime_arn"]}",\n'
        f'  cognitoClientId: "{d["cognito_client_id"]}",\n'
        f'  cognitoUserPoolId: "{d["cognito_user_pool_id"]}"\n'
        "};\n"
    )
    CFG_JS.write_text(js)
    log("wrote adviser-config.js (no credentials)")


def ensure_bucket():
    try:
        if REGION == "us-east-1":
            s3.create_bucket(Bucket=BUCKET)
        else:
            s3.create_bucket(Bucket=BUCKET, CreateBucketConfiguration={"LocationConstraint": REGION})
        log(f"created bucket {BUCKET}")
    except ClientError as e:
        if e.response["Error"]["Code"] in ("BucketAlreadyOwnedByYou", "BucketAlreadyExists"):
            log(f"bucket {BUCKET} ready")
        else:
            raise
    # Block public access
    s3.put_public_access_block(
        Bucket=BUCKET,
        PublicAccessBlockConfiguration={
            "BlockPublicAcls": True, "IgnorePublicAcls": True,
            "BlockPublicPolicy": True, "RestrictPublicBuckets": True,
        },
    )


def upload_files():
    def push(rel, path):
        ctype, _ = mimetypes.guess_type(rel)
        ctype = ctype or "application/octet-stream"
        cache = "no-cache, no-store, must-revalidate" if rel.endswith(".html") or rel.endswith("config.js") else "public, max-age=86400"
        s3.put_object(
            Bucket=BUCKET, Key=rel, Body=path.read_bytes(),
            ContentType=ctype, CacheControl=cache,
        )
        log(f"uploaded s3://{BUCKET}/{rel} ({ctype}, {path.stat().st_size} bytes)")

    for fname in FILES_TO_UPLOAD:
        path = ROOT / fname
        if not path.exists():
            raise SystemExit(f"missing {path}")
        push(fname, path)
    # walk dirs
    for d in DIRS_TO_UPLOAD:
        root = ROOT / d
        if not root.exists():
            continue
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            # skip the python generator + scripts
            if path.suffix in (".py",):
                continue
            rel = str(path.relative_to(ROOT))
            push(rel, path)


def ensure_oac():
    for it in cf.list_origin_access_controls().get("OriginAccessControlList", {}).get("Items", []) or []:
        if it.get("Name") == OAC_NAME:
            log(f"reusing OAC {it['Id']}")
            return it["Id"]
    r = cf.create_origin_access_control(OriginAccessControlConfig={
        "Name": OAC_NAME,
        "OriginAccessControlOriginType": "s3",
        "SigningBehavior": "always",
        "SigningProtocol": "sigv4",
    })
    log(f"created OAC {r['OriginAccessControl']['Id']}")
    return r["OriginAccessControl"]["Id"]


def find_distribution():
    paginator = cf.get_paginator("list_distributions")
    for page in paginator.paginate():
        for d in page.get("DistributionList", {}).get("Items", []) or []:
            if d.get("Comment") == DIST_TAG:
                return d["Id"], d["DomainName"]
    return None, None


def create_distribution(oac_id):
    origin_id = "s3-restart-journey-sim"
    config = {
        "CallerReference": f"restart-journey-{int(time.time())}",
        "Comment": DIST_TAG,
        "Enabled": True,
        "DefaultRootObject": "index.html",
        "Origins": {"Quantity": 1, "Items": [{
            "Id": origin_id,
            "DomainName": f"{BUCKET}.s3.{REGION}.amazonaws.com",
            "S3OriginConfig": {"OriginAccessIdentity": ""},
            "OriginAccessControlId": oac_id,
            "CustomHeaders": {"Quantity": 0},
            "ConnectionAttempts": 3,
            "ConnectionTimeout": 10,
            "OriginShield": {"Enabled": False},
        }]},
        "DefaultCacheBehavior": {
            "TargetOriginId": origin_id,
            "ViewerProtocolPolicy": "redirect-to-https",
            "AllowedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"], "CachedMethods": {"Quantity": 2, "Items": ["GET", "HEAD"]}},
            "Compress": True,
            "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",  # Managed-CachingOptimized
            "FunctionAssociations": {"Quantity": 0},
            "LambdaFunctionAssociations": {"Quantity": 0},
        },
        "PriceClass": "PriceClass_100",
        "ViewerCertificate": {"CloudFrontDefaultCertificate": True},
        "Restrictions": {"GeoRestriction": {"RestrictionType": "none", "Quantity": 0}},
        "HttpVersion": "http2",
        "IsIPV6Enabled": True,
    }
    r = cf.create_distribution(DistributionConfig=config)
    dist = r["Distribution"]
    log(f"created CloudFront distribution {dist['Id']}")
    return dist["Id"], dist["DomainName"]


def set_bucket_policy(dist_arn):
    policy = {
        "Version": "2008-10-17",
        "Statement": [{
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {"Service": "cloudfront.amazonaws.com"},
            "Action": "s3:GetObject",
            "Resource": f"arn:aws:s3:::{BUCKET}/*",
            "Condition": {"StringEquals": {"AWS:SourceArn": dist_arn}},
        }],
    }
    s3.put_bucket_policy(Bucket=BUCKET, Policy=json.dumps(policy))
    log("bucket policy set: CloudFront principal can GetObject")


def wait_deployed(dist_id):
    log("waiting for CloudFront distribution to deploy (first time can take ~3-5 min)")
    for _ in range(60):
        time.sleep(15)
        d = cf.get_distribution(Id=dist_id)["Distribution"]
        log(f"  status={d['Status']}")
        if d["Status"] == "Deployed":
            return
    log("timed out waiting; continuing anyway")


def invalidate(dist_id):
    r = cf.create_invalidation(
        DistributionId=dist_id,
        InvalidationBatch={
            "Paths": {"Quantity": 3, "Items": ["/index.html", "/adviser-bundle.js", "/adviser-config.js"]},
            "CallerReference": str(int(time.time())),
        },
    )
    log(f"invalidation {r['Invalidation']['Id']} created")


def main():
    d = deploy_output()
    pool_id = d["cognito_user_pool_id"]

    ensure_cognito_user(pool_id)
    write_config(d)
    ensure_bucket()
    upload_files()

    oac_id = ensure_oac()
    dist_id, domain = find_distribution()
    if dist_id:
        log(f"reusing distribution {dist_id} ({domain})")
        first_time = False
    else:
        dist_id, domain = create_distribution(oac_id)
        dist_arn = f"arn:aws:cloudfront::{ACCOUNT}:distribution/{dist_id}"
        set_bucket_policy(dist_arn)
        first_time = True

    if first_time:
        wait_deployed(dist_id)
    else:
        invalidate(dist_id)

    out = {
        "cloudfront_distribution_id": dist_id,
        "cloudfront_url": f"https://{domain}",
        "bucket": BUCKET,
        "cognito_user": COG_USER,
        "cognito_password": COG_PASSWORD,
    }
    (ROOT / "web-deploy-output.json").write_text(json.dumps(out, indent=2))
    print()
    print(json.dumps(out, indent=2))
    print()
    log(f"OPEN: https://{domain}/index.html")


if __name__ == "__main__":
    main()
