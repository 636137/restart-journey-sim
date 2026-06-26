#!/usr/bin/env python3
"""Inference layer: load fit parameters and emit prediction tables.

Reads bi/models/*.json (created by train.py) and produces:
  bi/data/model_predictions.csv   per-journey predicted P(success), survival P50, model-picked adviser
  bi/data/model_metrics.csv       one row per model with the fit metrics
  bi/data/model_top_features.csv  per-model top features by importance / magnitude

This is what the BI layer consumes - so dashboards show *trained* outputs.
"""
import csv
import json
import math
from pathlib import Path

import pandas as pd
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
MODELS = ROOT / "models"


def log(m):
    print(f"[infer] {m}", flush=True)


def load_json(name):
    return json.loads((MODELS / name).read_text())


def main():
    classifier = load_json("classifier.json")
    survival   = load_json("survival.json")
    matcher    = load_json("matcher.json")
    transitions = load_json("transitions.json")

    # =========================================================
    # Model metrics row per model
    # =========================================================
    metrics_rows = [
        {
            "model_name":   "Success classifier (calibrated logistic)",
            "model_kind":   classifier["model_kind"],
            "primary_metric_name": "Top-decile lift",
            "primary_metric_value": round(classifier["auc_proxy_top_decile_lift"], 3),
            "secondary_metric_name": "Positive rate",
            "secondary_metric_value": round(classifier["positive_rate"], 3),
            "n_training_rows": classifier["n_training_rows"],
        },
        {
            "model_name":   "Survival (Cox proportional hazards)",
            "model_kind":   survival["model_kind"],
            "primary_metric_name": "Concordance index",
            "primary_metric_value": round(survival["concordance_index"], 3),
            "secondary_metric_name": "Event rate",
            "secondary_metric_value": round(survival["event_rate"], 3),
            "n_training_rows": survival["n_training_rows"],
        },
        {
            "model_name":   "Matcher (LightGBM pairwise ranker)",
            "model_kind":   matcher["model_kind"],
            "primary_metric_name": "Top-1 agreement vs assigned",
            "primary_metric_value": round(matcher.get("top1_agreement_with_assigned", 0), 3),
            "secondary_metric_name": "Groups (customers)",
            "secondary_metric_value": matcher["n_groups"],
            "n_training_rows": matcher["n_pairs"],
        },
        {
            "model_name":   "State transitions (Markov MLE)",
            "model_kind":   transitions["model_kind"],
            "primary_metric_name": "States",
            "primary_metric_value": len(transitions["states"]),
            "secondary_metric_name": "Scenario bands",
            "secondary_metric_value": len(transitions["matrices_by_scenario_band"]),
            "n_training_rows": transitions["n_training_rows"],
        },
    ]
    pd.DataFrame(metrics_rows).to_csv(DATA / "model_metrics.csv", index=False)
    log("model_metrics.csv written")

    # =========================================================
    # Top features per model
    # =========================================================
    feature_rows = []
    # Classifier coefficients
    for fname, coef in zip(classifier["feature_columns"], classifier["mean_coefficients"]):
        feature_rows.append({
            "model": "success_classifier",
            "feature": fname,
            "value": float(coef),
            "abs_value": float(abs(coef)),
            "polarity": "positive" if coef >= 0 else "negative",
        })
    # Cox coefficients
    for fname, coef in survival["coefficients"].items():
        feature_rows.append({
            "model": "survival_cox",
            "feature": fname,
            "value": float(coef),
            "abs_value": float(abs(coef)),
            "polarity": "positive" if coef >= 0 else "negative",
        })
    # Matcher importances
    for fname, gain in matcher["gain_importances"].items():
        feature_rows.append({
            "model": "matcher_lightgbm",
            "feature": fname,
            "value": float(gain),
            "abs_value": float(gain),
            "polarity": "positive",
        })
    pd.DataFrame(feature_rows).to_csv(DATA / "model_top_features.csv", index=False)
    log("model_top_features.csv written")

    # =========================================================
    # Per-journey predictions (already in predictions_success.csv from train.py)
    # Also add survival P50 estimate per journey using fit coefficients
    # =========================================================
    journeys = pd.read_csv(DATA / "journeys.csv")
    customers = pd.read_csv(DATA / "customers.csv")
    preds = pd.read_csv(DATA / "predictions_success.csv")
    j2 = journeys.drop(columns=["region_key"], errors="ignore")
    df = j2.merge(customers[["customer_id","region_key","prior_sector","digital_skills","uc_months_at_start","disability_or_health","barriers_count"]], on="customer_id", how="left")
    df = df.merge(preds, on=["journey_id","customer_id"], how="left")

    # Cox-style P50 estimate using fitted coefficients
    cox_coefs = survival["coefficients"]
    baseline = survival["baseline_survival_at_week"]
    df["barriers_count"] = pd.to_numeric(df["barriers_count"], errors="coerce").fillna(0)
    df["uc_months_at_start"] = pd.to_numeric(df["uc_months_at_start"], errors="coerce").fillna(8)
    df["digital_low"] = (df["digital_skills"] == "Low").astype(int)
    df["region_north-london"] = (df["region_key"] == "north-london").astype(int)
    df["region_south-yorkshire"] = (df["region_key"] == "south-yorkshire").astype(int)
    df["region_derbyshire-notts"] = (df["region_key"] == "derbyshire-notts").astype(int)
    df["region_wales"] = (df["region_key"] == "wales").astype(int)
    sector_map = {
        "Warehouse / logistics":"sector_warehouse_logistics",
        "Retail":"sector_retail",
        "Hospitality":"sector_hospitality",
        "Construction":"sector_construction",
    }
    for sec, col in sector_map.items():
        df[col] = (df["prior_sector"] == sec).astype(int)

    def cox_survival_p50(row):
        # linear predictor
        lp = 0.0
        for f, c in cox_coefs.items():
            v = row.get(f, 0)
            try:
                lp += float(c) * float(v)
            except Exception:
                pass
        # S(t) = S0(t) ** exp(lp). Find P50 = smallest week where S <= 0.5
        for week in [4,8,12,16,20,24]:
            S0 = baseline.get(str(week), 1.0)
            St = S0 ** math.exp(lp)
            if St <= 0.5:
                return week
        return 24

    df["predicted_p50_weeks"] = df.apply(cox_survival_p50, axis=1)
    out_cols = ["journey_id","customer_id","adviser_id","scenario_band",
                "predicted_success_probability","predicted_p50_weeks"]
    df[out_cols].to_csv(DATA / "model_predictions.csv", index=False)
    log(f"model_predictions.csv written · {len(df)} rows")


if __name__ == "__main__":
    main()
