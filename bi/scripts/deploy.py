#!/usr/bin/env python3
"""Deploy the Restart BI dashboards to AWS:

  1. Upload bi/data/*.csv into s3://restart-bi-<account>-<region>/<table>/
  2. Create Glue database `restart_bi` with 6 external tables on those CSVs.
  3. Create Athena workgroup with a results bucket.
  4. Subscribe the account to QuickSight Enterprise + Q (if not already).
  5. Create 6 QuickSight datasets backed by Athena (SPICE).
  6. Create 3 QuickSight analyses/dashboards (Executive / Adviser Perf / Customer Outcomes).
  7. Create one QuickSight Q topic for natural-language Q&A.

Idempotent: each step looks up the resource before creating.
Requires AWS creds for account 348425780214, us-west-2.
"""
import csv
import json
import os
import sys
import time
from pathlib import Path

import boto3
from botocore.exceptions import ClientError

REGION = "us-west-2"
os.environ["AWS_REGION"] = REGION
os.environ["AWS_DEFAULT_REGION"] = REGION

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
OUT = ROOT / "deploy-output.json"
QSIGHT_DIR = ROOT / "quicksight"
QSIGHT_DIR.mkdir(parents=True, exist_ok=True)

sts = boto3.client("sts")
ACCOUNT = sts.get_caller_identity()["Account"]
ARN = sts.get_caller_identity()["Arn"]

BUCKET = f"restart-bi-{ACCOUNT}-{REGION}"
RESULTS_BUCKET = f"restart-bi-athena-{ACCOUNT}-{REGION}"
DB = "restart_bi"
WG = "restart-bi"
QS_NS = "default"
QS_USER_ARN = ARN  # we'll resolve real QS user later if needed
DS_ATHENA = "restart-bi-athena"

s3 = boto3.client("s3", region_name=REGION)
glue = boto3.client("glue", region_name=REGION)
athena = boto3.client("athena", region_name=REGION)
qs = boto3.client("quicksight", region_name=REGION)


def log(m): print(f"[bi] {m}", flush=True)


# --- Step 1: S3 -----------------------------------------------------------------
def ensure_bucket(name):
    try:
        if REGION == "us-east-1":
            s3.create_bucket(Bucket=name)
        else:
            s3.create_bucket(Bucket=name, CreateBucketConfiguration={"LocationConstraint": REGION})
        log(f"created bucket {name}")
    except ClientError as e:
        if e.response["Error"]["Code"] in ("BucketAlreadyOwnedByYou","BucketAlreadyExists"):
            log(f"bucket {name} exists")
        else:
            raise


def upload_data():
    for csv_path in sorted(DATA.glob("*.csv")):
        table = csv_path.stem
        key = f"{table}/{csv_path.name}"
        s3.upload_file(str(csv_path), BUCKET, key)
        log(f"uploaded s3://{BUCKET}/{key}")


# --- Step 2: Glue ---------------------------------------------------------------
GLUE_COLUMN_TYPES = {
    "int": "int",
    "bigint": "bigint",
    "decimal": "double",
    "string": "string",
    "boolean": "string",  # CSV bools as string
    "date": "date",
}


def infer_columns(csv_path):
    """Sniff the first 200 rows to pick column types."""
    with open(csv_path) as f:
        reader = csv.reader(f)
        header = next(reader)
        sample = [next(reader, None) for _ in range(200)]
    sample = [r for r in sample if r]
    cols = []
    for i, name in enumerate(header):
        vals = [row[i] for row in sample if i < len(row) and row[i] != ""]
        t = "string"
        if vals and all(_isint(v) for v in vals):
            t = "bigint"
        elif vals and all(_isfloat(v) for v in vals):
            t = "double"
        elif vals and all(_isdate(v) for v in vals):
            t = "date"
        cols.append({"Name": name, "Type": t})
    return cols


def _isint(v):
    try: int(v); return True
    except: return False


def _isfloat(v):
    try: float(v); return True
    except: return False


def _isdate(v):
    if len(v) != 10: return False
    if v[4] != "-" or v[7] != "-": return False
    try:
        int(v[:4]); int(v[5:7]); int(v[8:10]); return True
    except: return False


def ensure_glue_db():
    try:
        glue.create_database(DatabaseInput={"Name": DB})
        log(f"created glue db {DB}")
    except glue.exceptions.AlreadyExistsException:
        log(f"glue db {DB} exists")


def upsert_glue_table(table_name, csv_path):
    # OpenCSV SerDe returns every field as string; cast happens later in QuickSight.
    columns = [{"Name": c["Name"], "Type": "string"} for c in infer_columns(csv_path)]
    location = f"s3://{BUCKET}/{table_name}/"
    table_input = {
        "Name": table_name,
        "StorageDescriptor": {
            "Columns": columns,
            "Location": location,
            "InputFormat": "org.apache.hadoop.mapred.TextInputFormat",
            "OutputFormat": "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat",
            "Compressed": False,
            "SerdeInfo": {
                "SerializationLibrary": "org.apache.hadoop.hive.serde2.OpenCSVSerde",
                "Parameters": {"separatorChar": ",", "quoteChar": "\"", "escapeChar": "\\"}
            },
        },
        "TableType": "EXTERNAL_TABLE",
        "Parameters": {
            "classification": "csv",
            "skip.header.line.count": "1",
            "use.null.for.invalid.data": "true",
        },
    }
    try:
        glue.create_table(DatabaseName=DB, TableInput=table_input)
        log(f"created glue table {table_name}")
    except glue.exceptions.AlreadyExistsException:
        glue.update_table(DatabaseName=DB, TableInput=table_input)
        log(f"updated glue table {table_name}")


# --- Step 3: Athena -------------------------------------------------------------
def ensure_workgroup():
    try:
        athena.create_work_group(
            Name=WG,
            Configuration={
                "ResultConfiguration": {"OutputLocation": f"s3://{RESULTS_BUCKET}/"},
                "EnforceWorkGroupConfiguration": True,
                "PublishCloudWatchMetricsEnabled": True,
            },
        )
        log(f"created athena workgroup {WG}")
    except ClientError as e:
        if e.response["Error"]["Code"] == "InvalidRequestException" and "already" in str(e).lower():
            log(f"athena workgroup {WG} exists")
        else:
            raise


def athena_sanity():
    """Run a SELECT count(*) on each table to confirm Athena can read."""
    out_counts = {}
    for table in ["customers","advisers","journeys","journey_stages","router_scores","outcomes_kpis","personas","scenarios","postcode_density","adviser_experience","match_quality","survival_curves","state_transitions","success_snapshots","feature_contributions","model_metrics","model_top_features","model_predictions","model_top_picks","predictions_success"]:
        qid = athena.start_query_execution(
            QueryString=f'SELECT count(*) AS n FROM {DB}.{table}',
            WorkGroup=WG,
        )["QueryExecutionId"]
        # Poll
        for _ in range(40):
            time.sleep(2)
            st = athena.get_query_execution(QueryExecutionId=qid)["QueryExecution"]["Status"]["State"]
            if st in ("SUCCEEDED","FAILED","CANCELLED"):
                break
        if st != "SUCCEEDED":
            r = athena.get_query_execution(QueryExecutionId=qid)["QueryExecution"]["Status"]
            log(f"  athena {table} failed: {r.get('StateChangeReason')}")
            continue
        rs = athena.get_query_results(QueryExecutionId=qid)
        n = rs["ResultSet"]["Rows"][1]["Data"][0]["VarCharValue"]
        out_counts[table] = int(n)
        log(f"  athena {table}: {n} rows")
    return out_counts


# --- Step 4: QuickSight subscription -------------------------------------------
def ensure_quicksight_subscription():
    try:
        sub = qs.describe_account_subscription(AwsAccountId=ACCOUNT)
        log(f"QuickSight already subscribed: {sub['AccountInfo'].get('Edition')}")
        return sub
    except qs.exceptions.ResourceNotFoundException:
        log("subscribing account to QuickSight Enterprise + Q...")
        # Need notification email + admin user. Use the caller's IAM identity.
        email = os.environ.get("QS_NOTIFICATION_EMAIL", "chaddhendren@maximus.com")
        qs.create_account_subscription(
            Edition="ENTERPRISE",
            AuthenticationMethod="IAM_AND_QUICKSIGHT",
            AwsAccountId=ACCOUNT,
            AccountName=f"restart-bi-{ACCOUNT}",
            NotificationEmail=email,
        )
        # Wait for it to come up
        for _ in range(40):
            time.sleep(8)
            try:
                sub = qs.describe_account_subscription(AwsAccountId=ACCOUNT)
                if sub["AccountInfo"].get("AccountSubscriptionStatus") == "ACCOUNT_CREATED":
                    log("subscription active")
                    return sub
            except Exception:
                continue
        raise SystemExit("QuickSight subscription did not become active")


# --- Step 5: QuickSight datasets & dashboards ----------------------------------
def ensure_quicksight_user():
    """Return the QuickSight user ARN for the caller."""
    # IAM user name from caller ARN: arn:aws:iam::ACCT:user/<name>
    uname = ARN.split("/")[-1]
    try:
        u = qs.describe_user(AwsAccountId=ACCOUNT, Namespace=QS_NS, UserName=uname)
        log(f"QS user: {u['User']['Arn']}")
        return u["User"]["Arn"]
    except qs.exceptions.ResourceNotFoundException:
        # Try with iam/<user>
        try:
            u = qs.describe_user(AwsAccountId=ACCOUNT, Namespace=QS_NS, UserName=f"{uname}")
            return u["User"]["Arn"]
        except Exception:
            pass
        # Register
        try:
            r = qs.register_user(
                AwsAccountId=ACCOUNT,
                Namespace=QS_NS,
                IdentityType="IAM",
                IamArn=ARN,
                UserRole="ADMIN",
                Email=os.environ.get("QS_NOTIFICATION_EMAIL","chaddhendren@maximus.com"),
            )
            log(f"registered QS user {r['User']['Arn']}")
            return r["User"]["Arn"]
        except qs.exceptions.ResourceExistsException:
            u = qs.describe_user(AwsAccountId=ACCOUNT, Namespace=QS_NS, UserName=uname)
            return u["User"]["Arn"]


def ensure_athena_data_source(user_arn):
    ds_id = DS_ATHENA
    try:
        ds = qs.describe_data_source(AwsAccountId=ACCOUNT, DataSourceId=ds_id)
        status = ds["DataSource"].get("Status")
        if status in ("CREATION_FAILED","DELETION_FAILED","UPDATE_FAILED"):
            log(f"QS data source {ds_id} status={status}, deleting...")
            qs.delete_data_source(AwsAccountId=ACCOUNT, DataSourceId=ds_id)
            raise qs.exceptions.ResourceNotFoundException({"Error":{"Code":"ResourceNotFoundException"}}, "describe")
        log(f"QS data source {ds_id} exists ({status})")
        return ds_id
    except qs.exceptions.ResourceNotFoundException:
        qs.create_data_source(
            AwsAccountId=ACCOUNT,
            DataSourceId=ds_id,
            Name="Restart BI Athena",
            Type="ATHENA",
            DataSourceParameters={"AthenaParameters": {"WorkGroup": WG, "RoleArn": f"arn:aws:iam::{ACCOUNT}:role/aws-quicksight-service-role-v0"}},
            Permissions=[{
                "Principal": user_arn,
                "Actions": [
                    "quicksight:UpdateDataSourcePermissions",
                    "quicksight:DescribeDataSource",
                    "quicksight:DescribeDataSourcePermissions",
                    "quicksight:PassDataSource",
                    "quicksight:UpdateDataSource",
                    "quicksight:DeleteDataSource",
                ],
            }],
        )
        log(f"created QS data source {ds_id}")
        return ds_id


def upsert_dataset(user_arn, table):
    ds_id = f"ds-{table.replace('_','-')}"
    # Glue stores every column as string (OpenCSV SerDe), so QuickSight
    # InputColumns must declare STRING here. Numeric/date casts happen via
    # LogicalTableMap cast operations below.
    inferred = infer_columns(DATA/f"{table}.csv")
    physical = {
        "RelationalTable": {
            "DataSourceArn": f"arn:aws:quicksight:{REGION}:{ACCOUNT}:datasource/{DS_ATHENA}",
            "Catalog": "AwsDataCatalog",
            "Schema": DB,
            "Name": table,
            "InputColumns": [{"Name": c["Name"], "Type": "STRING"} for c in inferred],
        }
    }
    # Columns that need to stay STRING for QuickSight CategoricalDimension use,
    # even though they look numeric in CSV.
    KEEP_STRING = {"rank", "week", "barriers_count", "stages_count"}
    cast_columns = []
    for c in inferred:
        if c["Name"] in KEEP_STRING:
            continue  # leave as STRING
        if c["Type"] in ("bigint","int","double","date"):
            cast_columns.append({
                "ColumnName": c["Name"],
                "NewColumnType": _qs_type(c["Type"]),
                "Format": "yyyy-MM-dd" if c["Type"] == "date" else None,
            })
    # Strip None entries
    cast_columns = [{k:v for k,v in cc.items() if v is not None} for cc in cast_columns]
    logical_table_id = f"lt-{table.replace('_','-')}"
    logical_tables = {logical_table_id: {
        "Alias": table,
        "DataTransforms": [
            {"CastColumnTypeOperation": cc} for cc in cast_columns
        ] if cast_columns else [],
        "Source": {"PhysicalTableId": f"pt-{table.replace('_','-')}"},
    }}
    body = dict(
        AwsAccountId=ACCOUNT,
        DataSetId=ds_id,
        Name=table,
        PhysicalTableMap={f"pt-{table.replace('_','-')}": physical},
        LogicalTableMap=logical_tables,
        ImportMode="SPICE",
        Permissions=[{
            "Principal": user_arn,
            "Actions": [
                "quicksight:UpdateDataSetPermissions",
                "quicksight:DescribeDataSet",
                "quicksight:DescribeDataSetPermissions",
                "quicksight:PassDataSet",
                "quicksight:DescribeIngestion",
                "quicksight:ListIngestions",
                "quicksight:UpdateDataSet",
                "quicksight:DeleteDataSet",
                "quicksight:CreateIngestion",
                "quicksight:CancelIngestion",
            ],
        }],
    )
    try:
        qs.describe_data_set(AwsAccountId=ACCOUNT, DataSetId=ds_id)
        log(f"dataset {ds_id} already exists - skipping update to preserve SPICE capacity")
        return ds_id
    except qs.exceptions.ResourceNotFoundException:
        qs.create_data_set(**body)
        log(f"created dataset {ds_id}")
    # Trigger refresh
    try:
        iid = f"ing-{int(time.time())}"
        qs.create_ingestion(AwsAccountId=ACCOUNT, DataSetId=ds_id, IngestionId=iid)
    except Exception as e:
        log(f"  ingestion start: {e}")
    return ds_id


def _qs_type(t):
    return {"bigint":"INTEGER","int":"INTEGER","double":"DECIMAL","date":"DATETIME","string":"STRING"}.get(t,"STRING")


# --- Step 6: Dashboards ---------------------------------------------------------
def render_dashboard_definition(name, dataset_ids):
    """Build a minimal but real dashboard with bar/line/KPI tiles per table."""
    # We use AnalysisDefinition style. Three dashboards, three datasets each.
    # Keep this lightweight; user can polish in QS console.
    pass  # see deploy() for inlined dashboards


def upsert_theme(user_arn):
    from dashboards import THEME_ID, THEME_NAME, THEME_CONFIG
    try:
        qs.describe_theme(AwsAccountId=ACCOUNT, ThemeId=THEME_ID)
        qs.update_theme(
            AwsAccountId=ACCOUNT,
            ThemeId=THEME_ID,
            Name=THEME_NAME,
            BaseThemeId="MIDNIGHT",
            Configuration=THEME_CONFIG,
        )
        log(f"updated theme {THEME_ID}")
    except qs.exceptions.ResourceNotFoundException:
        qs.create_theme(
            AwsAccountId=ACCOUNT,
            ThemeId=THEME_ID,
            Name=THEME_NAME,
            BaseThemeId="MIDNIGHT",
            Configuration=THEME_CONFIG,
            Permissions=[{
                "Principal": user_arn,
                "Actions": [
                    "quicksight:DescribeTheme",
                    "quicksight:ListThemeVersions",
                    "quicksight:DescribeThemeAlias",
                    "quicksight:ListThemeAliases",
                    "quicksight:UpdateTheme",
                    "quicksight:UpdateThemeAlias",
                    "quicksight:UpdateThemePermissions",
                    "quicksight:DeleteTheme",
                    "quicksight:DeleteThemeAlias",
                    "quicksight:CreateThemeAlias",
                    "quicksight:DescribeThemePermissions",
                ],
            }],
        )
        log(f"created theme {THEME_ID}")
    return f"arn:aws:quicksight:{REGION}:{ACCOUNT}:theme/{THEME_ID}"


def upsert_dashboard(user_arn, dashboard_id, name, definition, theme_arn=None):
    body = dict(
        AwsAccountId=ACCOUNT,
        DashboardId=dashboard_id,
        Name=name,
        Definition=definition,
        Permissions=[{
            "Principal": user_arn,
            "Actions": [
                "quicksight:DescribeDashboard",
                "quicksight:ListDashboardVersions",
                "quicksight:QueryDashboard",
                "quicksight:UpdateDashboard",
                "quicksight:DeleteDashboard",
                "quicksight:DescribeDashboardPermissions",
                "quicksight:UpdateDashboardPermissions",
                "quicksight:UpdateDashboardPublishedVersion",
            ],
        }],
    )
    if theme_arn:
        body["ThemeArn"] = theme_arn
    try:
        qs.describe_dashboard(AwsAccountId=ACCOUNT, DashboardId=dashboard_id)
        update_kwargs = dict(AwsAccountId=ACCOUNT, DashboardId=dashboard_id, Name=name, Definition=definition)
        if theme_arn:
            update_kwargs["ThemeArn"] = theme_arn
        resp = qs.update_dashboard(**update_kwargs)
        new_version = int(resp.get("VersionArn", "").rsplit("/", 1)[-1] or 0)
        log(f"updated dashboard {dashboard_id} -> version {new_version}")
        # Wait for the new version to be CREATION_SUCCESSFUL before publishing
        for _ in range(30):
            time.sleep(2)
            v = qs.describe_dashboard(AwsAccountId=ACCOUNT, DashboardId=dashboard_id, VersionNumber=new_version)["Dashboard"]["Version"]
            if v["Status"] == "CREATION_SUCCESSFUL":
                break
            if v["Status"] in ("CREATION_FAILED","UPDATE_FAILED"):
                log(f"  dashboard {dashboard_id} new version failed: {v.get('Errors')}")
                return
        qs.update_dashboard_published_version(AwsAccountId=ACCOUNT, DashboardId=dashboard_id, VersionNumber=new_version)
        log(f"published dashboard {dashboard_id} version {new_version}")
    except qs.exceptions.ResourceNotFoundException:
        qs.create_dashboard(**body)
        log(f"created dashboard {dashboard_id}")


def _ds_arn(dsid):
    return f"arn:aws:quicksight:{REGION}:{ACCOUNT}:dataset/{dsid}"


def build_dashboards(user_arn, dataset_ids):
    """Polished three-dashboard build via the dashboards module."""
    from dashboards import executive_definition, adviser_definition, customer_definition, progress_definition, scenarios_definition, matching_definition, prediction_definition, models_definition
    theme_arn = upsert_theme(user_arn)
    DASH = [
        ("dash-executive",   "Restart · Executive Overview",     executive_definition(ACCOUNT, REGION)),
        ("dash-adviser",     "Restart · Adviser Performance",     adviser_definition(ACCOUNT, REGION)),
        ("dash-customer",    "Restart · Customer Outcomes",       customer_definition(ACCOUNT, REGION)),
        ("dash-progress",    "Restart · Journey Progress",        progress_definition(ACCOUNT, REGION)),
        ("dash-scenarios",   "Restart · Realistic Scenarios",     scenarios_definition(ACCOUNT, REGION)),
        ("dash-matching",    "Restart · Max Navigator Matching",  matching_definition(ACCOUNT, REGION)),
        ("dash-prediction",  "Restart · Success Prediction & Survival", prediction_definition(ACCOUNT, REGION)),
        ("dash-models",      "Restart · Trained Model Diagnostics",     models_definition(ACCOUNT, REGION)),
    ]
    for dash_id, name, definition in DASH:
        try:
            existing = qs.describe_dashboard(AwsAccountId=ACCOUNT, DashboardId=dash_id)["Dashboard"]
            if existing.get("Version",{}).get("Status") in ("CREATION_FAILED","UPDATE_FAILED"):
                qs.delete_dashboard(AwsAccountId=ACCOUNT, DashboardId=dash_id)
                log(f"deleted failed dashboard {dash_id}")
                time.sleep(2)
        except qs.exceptions.ResourceNotFoundException:
            pass
        upsert_dashboard(user_arn, dash_id, name, definition, theme_arn=theme_arn)
    return


def upsert_topic(user_arn, datasets):
    topic_id = "restart-bi-topic"
    # Map dataset id back to the CSV file (and through that, columns)
    name_of = lambda ds_id: ds_id.replace("ds-","").replace("-","_")
    ds_blocks = []
    for ds_id in datasets:
        table = name_of(ds_id)
        cols = infer_columns(DATA / f"{table}.csv")
        topic_cols = []
        for c in cols:
            t = c["Type"]
            data_type = "STRING"
            agg = ["COUNT"]
            if t in ("bigint","int","double"):
                data_type = "DECIMAL" if t == "double" else "INTEGER"
                agg = ["SUM","AVERAGE","MIN","MAX","COUNT"]
            elif t == "date":
                data_type = "DATETIME"
                agg = ["COUNT"]
            topic_cols.append({
                "ColumnName": c["Name"],
                "ColumnFriendlyName": c["Name"].replace("_"," ").title(),
                "ColumnDataRole": "DIMENSION" if data_type in ("STRING","DATETIME") else "MEASURE",
                "Aggregation": "COUNT" if data_type in ("STRING","DATETIME") else "SUM",
            })
        ds_blocks.append({
            "DatasetArn": f"arn:aws:quicksight:{REGION}:{ACCOUNT}:dataset/{ds_id}",
            "DatasetName": table,
            "DatasetDescription": f"Restart BI table: {table}",
            "Columns": topic_cols,
        })
    topic = {
        "Name": "Restart Programme",
        "Description": "Ask anything about Restart Scheme outcomes, advisers, customers, journeys, and Max Navigator scoring.",
        "DataSets": ds_blocks,
    }
    try:
        qs.update_topic(AwsAccountId=ACCOUNT, TopicId=topic_id, Topic=topic)
        log(f"updated Q topic {topic_id}")
    except qs.exceptions.ResourceNotFoundException:
        qs.create_topic(AwsAccountId=ACCOUNT, TopicId=topic_id, Topic=topic)
        log(f"created Q topic {topic_id}")


# --- Orchestrator ---------------------------------------------------------------
def main():
    log(f"account={ACCOUNT} region={REGION}")
    ensure_bucket(BUCKET); ensure_bucket(RESULTS_BUCKET)
    upload_data()
    ensure_glue_db()
    for csvp in sorted(DATA.glob("*.csv")):
        upsert_glue_table(csvp.stem, csvp)
    ensure_workgroup()
    counts = athena_sanity()

    ensure_quicksight_subscription()
    user_arn = ensure_quicksight_user()
    ensure_athena_data_source(user_arn)

    dataset_ids = []
    for table in ["customers","advisers","journeys","journey_stages","router_scores","outcomes_kpis","personas","scenarios","postcode_density","adviser_experience","match_quality","survival_curves","state_transitions","success_snapshots","feature_contributions","model_metrics","model_top_features","model_predictions","model_top_picks","predictions_success"]:
        dataset_ids.append(upsert_dataset(user_arn, table))

    # Dashboards via lightweight inline definitions
    try:
        build_dashboards(user_arn, dataset_ids)
    except Exception as e:
        log(f"dashboards: {e}")

    # Q Topic
    try:
        upsert_topic(user_arn, dataset_ids)
    except Exception as e:
        log(f"Q topic: {e}")

    out = {
        "account": ACCOUNT, "region": REGION,
        "bucket": BUCKET, "athena_results_bucket": RESULTS_BUCKET,
        "glue_db": DB, "athena_workgroup": WG,
        "row_counts": counts,
        "quicksight_data_source": DS_ATHENA,
        "quicksight_datasets": dataset_ids,
        "quicksight_console": f"https://{REGION}.quicksight.aws.amazon.com/sn/start",
    }
    OUT.write_text(json.dumps(out, indent=2))
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
