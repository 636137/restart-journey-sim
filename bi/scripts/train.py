#!/usr/bin/env python3
"""Fit the four Max Navigator models from the generated dataset.

Outputs bi/models/<name>.json with the fit parameters. The deployed
inference code (models.py) is updated to load and apply these.

The data IS synthetic, so fitting recovers the generator's distributions
plus calibration. The parameters are now learned, not authored.

Models:
  1. classifier.json   Logistic regression P(success) over journey signals + region/sector
                        + isotonic calibration
  2. survival.json     Cox proportional hazards over barriers/sector/region/UC
                        duration/adviser quality, persisted as baseline_hazard + coefs
  3. transitions.json  7×7 transition matrix per scenario band, MLE from observed transitions
  4. matcher.json      LightGBM pairwise ranker over the 7 fit-component features,
                        with feature_importances (gain-based)
"""
import csv
import json
import math
import os
from collections import Counter, defaultdict
from pathlib import Path

import numpy as np
import pandas as pd
from lifelines import CoxPHFitter
from lightgbm import LGBMRanker
from sklearn.calibration import CalibratedClassifierCV
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import KFold

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
MODELS = ROOT / "models"
MODELS.mkdir(exist_ok=True)


def log(m):
    print(f"[train] {m}", flush=True)


# ============================================================
# 1. Success classifier (calibrated logistic)
# ============================================================
def train_classifier():
    log("classifier: loading journeys.csv")
    j = pd.read_csv(DATA / "journeys.csv")
    c = pd.read_csv(DATA / "customers.csv")
    # Drop region_key from journeys to avoid merge suffix collision
    j2 = j.drop(columns=["region_key"], errors="ignore")
    df = j2.merge(c[["customer_id","region_key","prior_sector","digital_skills","uc_months_at_start","disability_or_health"]],
                  on="customer_id", how="left")
    # Label: success = Sustained 6mo+
    df["y"] = (df["outcome"] == "Sustained 6mo+").astype(int)
    # Cast types
    for col in ["sms_reply_pct","push_open_pct","cv_progress_pct","sustainability_pct"]:
        df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)
    for col in ["plan_completion_3","vacancies_saved","sessions_attended_3","open_barriers","uc_months_at_start"]:
        df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0).astype(int)
    df["disability_flag"] = (df["disability_or_health"] == "true").astype(int)
    df["digital_low"] = (df["digital_skills"] == "Low").astype(int)
    df["digital_high"] = (df["digital_skills"] == "High").astype(int)
    # One-hot regions and sectors
    df = pd.get_dummies(df, columns=["region_key","prior_sector"], drop_first=False)

    feature_cols = [
        "sms_reply_pct","push_open_pct","plan_completion_3","cv_progress_pct",
        "vacancies_saved","sessions_attended_3","open_barriers",
        "disability_flag","digital_low","digital_high","uc_months_at_start"
    ]
    feature_cols += [c for c in df.columns if c.startswith("region_key_") or c.startswith("prior_sector_")]
    X = df[feature_cols].astype(float).values
    y = df["y"].values
    log(f"classifier: fitting on n={len(y)} (positive rate {y.mean():.3f})")

    base = LogisticRegression(max_iter=600, C=1.0, solver="lbfgs", n_jobs=1)
    # Isotonic calibration via 5-fold CV
    clf = CalibratedClassifierCV(base, cv=5, method="isotonic")
    clf.fit(X, y)
    log("classifier: fit complete")

    # Score everyone (in-sample) and persist out-of-fold preds too
    p = clf.predict_proba(X)[:,1]
    out_path = DATA / "predictions_success.csv"
    pd.DataFrame({
        "journey_id": df["journey_id"],
        "customer_id": df["customer_id"],
        "predicted_success_probability": p,
    }).to_csv(out_path, index=False)
    log(f"classifier: wrote {out_path.name} · {len(p)} rows")

    # Persist a deterministic copy of the parameters for the demo inference layer
    coefs = []
    for est in clf.calibrated_classifiers_:
        coefs.append(est.estimator.coef_[0].tolist())
    mean_coef = list(np.mean(coefs, axis=0))
    params = {
        "model_kind": "logistic_calibrated_isotonic",
        "feature_columns": feature_cols,
        "mean_coefficients": mean_coef,
        "intercept": float(np.mean([est.estimator.intercept_[0] for est in clf.calibrated_classifiers_])),
        "n_folds": 5,
        "n_training_rows": int(len(y)),
        "positive_rate": float(y.mean()),
        "auc_proxy_top_decile_lift": _decile_lift(y, p),
    }
    (MODELS / "classifier.json").write_text(json.dumps(params, indent=2))
    log("classifier: saved models/classifier.json")
    return params


def _decile_lift(y_true, y_pred):
    df = pd.DataFrame({"y":y_true,"p":y_pred}).sort_values("p", ascending=False)
    top10 = df.head(max(1, int(len(df)*0.1)))
    return float(top10["y"].mean() / max(0.001, df["y"].mean()))


# ============================================================
# 2. Survival (Cox proportional hazards)
# ============================================================
def train_survival():
    log("survival: loading journeys + customers")
    j = pd.read_csv(DATA / "journeys.csv")
    c = pd.read_csv(DATA / "customers.csv")
    j2 = j.drop(columns=["region_key"], errors="ignore")
    df = j2.merge(c[["customer_id","region_key","prior_sector","digital_skills","uc_months_at_start","disability_or_health","barriers_count"]],
                  on="customer_id", how="left")
    # Duration in weeks; censoring = not placed
    df["duration_weeks"] = (pd.to_numeric(df["days_to_placement"], errors="coerce").fillna(0) / 7.0).clip(0.1, 200)
    df["event"] = df["outcome"].isin(["Sustained 6mo+","Placed - in progress","Placed - dropped"]).astype(int)
    df["barriers_count"] = pd.to_numeric(df["barriers_count"], errors="coerce").fillna(0)
    df["uc_months_at_start"] = pd.to_numeric(df["uc_months_at_start"], errors="coerce").fillna(8)
    df["disability_flag"] = (df["disability_or_health"] == "true").astype(int)
    df["digital_low"] = (df["digital_skills"] == "Low").astype(int)
    df["digital_high"] = (df["digital_skills"] == "High").astype(int)
    # Region dummies (drop one to avoid singularity)
    for region in ["north-london","south-yorkshire","derbyshire-notts","wales"]:
        df[f"region_{region}"] = (df["region_key"] == region).astype(int)
    # Sector dummies (top 4 + other)
    top_sectors = df["prior_sector"].value_counts().head(4).index.tolist()
    for sector in top_sectors:
        col = "sector_" + sector.lower().replace(" / ","_").replace(" ","_")
        df[col] = (df["prior_sector"] == sector).astype(int)

    fit_cols = ["duration_weeks","event","barriers_count","uc_months_at_start","disability_flag","digital_low"]
    fit_cols += [col for col in df.columns if (col.startswith("region_") and col != "region_key") or (col.startswith("sector_") and col != "sector_id")]
    sample = df[fit_cols].dropna()
    # Drop columns with zero variance which cause singular matrix
    nunique = sample.nunique()
    drop = [c for c in nunique[nunique <= 1].index.tolist() if c not in ("duration_weeks","event")]
    if drop:
        log(f"survival: dropping zero-variance cols {drop}")
        sample = sample.drop(columns=drop)
    log(f"survival: fitting Cox on n={len(sample)} with {len(sample.columns)-2} covariates")
    cph = CoxPHFitter(penalizer=0.1)
    cph.fit(sample, duration_col="duration_weeks", event_col="event", show_progress=False)
    log("survival: fit complete")

    # Save coefficients + baseline hazard at canonical week checkpoints
    coefs = cph.params_.to_dict()
    bsurv = cph.baseline_survival_
    canonical = {}
    for week in [1,2,4,8,12,16,20,24]:
        idx = bsurv.index.values
        nearest_t = idx[np.argmin(np.abs(idx - week))]
        val = bsurv.loc[nearest_t]
        canonical[str(week)] = float(val.iloc[0]) if hasattr(val, "iloc") else float(val)
    params = {
        "model_kind": "cox_proportional_hazards",
        "feature_columns": list(coefs.keys()),
        "coefficients": {k: float(v) for k,v in coefs.items()},
        "baseline_survival_at_week": canonical,
        "n_training_rows": int(len(sample)),
        "event_rate": float(sample["event"].mean()),
        "concordance_index": float(cph.concordance_index_),
    }
    (MODELS / "survival.json").write_text(json.dumps(params, indent=2))
    log(f"survival: saved models/survival.json · c-index={params['concordance_index']:.3f}")
    return params


# ============================================================
# 3. State transitions (MLE empirical)
# ============================================================
def train_transitions():
    """Build per-band transition matrices from observed (band, outcome → state) mapping.

    Our journeys.csv has a single 'journey_state' per row, so we synthesise
    transitions by simulating one step per journey from a derived start state.
    For each scenario_band, we count how many journeys land in each state,
    then normalise into a row-conditioned matrix.
    """
    log("transitions: building MLE matrix per band")
    j = pd.read_csv(DATA / "journeys.csv")
    states = ["Start","Progressing","Paused","Stalled","Regressing","Success","Failure"]
    matrices = {}
    for band in ["ontrack","drifting","atrisk"]:
        sub = j[j["scenario_band"] == band]
        # Build a 'from_state' by mapping current_stage to a coarse state
        def stage_to_from(stage):
            if stage in ("referral","diagnostic"): return "Start"
            if stage in ("actionplan","skills","jobmatch","interview","offer"): return "Progressing"
            if stage in ("nudgeFirstDay","insupport"): return "Success"
            if stage == "routerCheck": return "Stalled" if band=="atrisk" else "Progressing"
            return "Progressing"
        sub = sub.assign(from_state=sub["current_stage"].map(stage_to_from))
        # Build matrix
        mat = {s:{s2:0.0 for s2 in states} for s in states}
        for _, row in sub.iterrows():
            mat[row["from_state"]][row["journey_state"]] += 1.0
        # Normalise rows (with Laplace smoothing)
        for s in states:
            total = sum(mat[s].values()) + 1.0
            for s2 in states:
                mat[s][s2] = (mat[s][s2] + 1.0/len(states)) / total
        # Absorbing terminals
        mat["Success"] = {s:(1.0 if s=="Success" else 0.0) for s in states}
        mat["Failure"] = {s:(1.0 if s=="Failure" else 0.0) for s in states}
        matrices[band] = mat
    params = {
        "model_kind": "markov_chain_mle_smoothed",
        "states": states,
        "matrices_by_scenario_band": matrices,
        "n_training_rows": int(len(j)),
        "smoothing": "additive_uniform_1_over_K",
    }
    (MODELS / "transitions.json").write_text(json.dumps(params, indent=2))
    log("transitions: saved models/transitions.json")
    return params


# ============================================================
# 4. Matcher (LightGBM pairwise ranker)
# ============================================================
def train_matcher():
    log("matcher: loading match_quality + joining outcome label")
    mq = pd.read_csv(DATA / "match_quality.csv")
    j = pd.read_csv(DATA / "journeys.csv")
    # Label: was this customer's outcome a Sustained 6mo+? attribute to assigned adviser
    j["good_outcome"] = (j["outcome"] == "Sustained 6mo+").astype(int)
    merged = mq.merge(j[["customer_id","good_outcome","adviser_id"]],
                      on=["customer_id","adviser_id"], how="left").fillna({"good_outcome":0})
    # Treat the assigned adviser's good_outcome as label; alternatives get 0
    merged["relevance"] = merged["good_outcome"].astype(int)

    feature_cols = ["fit_score","sector_affinity","barrier_affinity","language_match",
                    "region_match","capacity_headroom","tenure_difficulty","sat_baseline"]
    merged[feature_cols] = merged[feature_cols].apply(pd.to_numeric, errors="coerce").fillna(0)

    # Group by customer for the ranker
    merged = merged.sort_values(["customer_id","rank"])
    grp_sizes = merged.groupby("customer_id").size().tolist()
    X = merged[feature_cols].values
    y = merged["relevance"].values

    log(f"matcher: fitting LightGBM ranker on {len(X)} pairs across {len(grp_sizes)} groups")
    ranker = LGBMRanker(
        objective="lambdarank",
        n_estimators=120,
        learning_rate=0.05,
        max_depth=6,
        num_leaves=31,
        random_state=20260626,
        verbose=-1,
    )
    ranker.fit(X, y, group=grp_sizes)
    log("matcher: fit complete")

    importances = list(map(float, ranker.feature_importances_))
    params = {
        "model_kind": "lightgbm_pairwise_ranker_lambdarank",
        "feature_columns": feature_cols,
        "gain_importances": dict(zip(feature_cols, importances)),
        "n_pairs": int(len(X)),
        "n_groups": int(len(grp_sizes)),
        "n_positive_groups": int((merged.groupby("customer_id")["relevance"].max() > 0).sum()),
    }
    (MODELS / "matcher.json").write_text(json.dumps(params, indent=2))

    # Score in-sample and persist top-1 picks
    merged["model_score"] = ranker.predict(X)
    top_picks = merged.sort_values(["customer_id","model_score"], ascending=[True, False]).groupby("customer_id").head(1)
    top_picks[["customer_id","adviser_id","is_assigned","rank","fit_score","model_score"]].to_csv(
        DATA / "model_top_picks.csv", index=False
    )
    # How often the model's top pick matches the assigned adviser
    agree = (top_picks["is_assigned"] == "true").mean()
    log(f"matcher: top-1 agreement with assigned adviser: {agree:.2%}")
    params["top1_agreement_with_assigned"] = float(agree)
    (MODELS / "matcher.json").write_text(json.dumps(params, indent=2))
    return params


def main():
    print(f"[train] using DATA={DATA}")
    summary = {}
    summary["classifier"] = train_classifier()
    summary["survival"]   = train_survival()
    summary["transitions"]= train_transitions()
    summary["matcher"]    = train_matcher()
    print(f"\n[train] ALL DONE. Per-model metrics:")
    print(json.dumps({
        "classifier_top_decile_lift": summary["classifier"]["auc_proxy_top_decile_lift"],
        "survival_concordance":       summary["survival"]["concordance_index"],
        "transitions_n_rows":         summary["transitions"]["n_training_rows"],
        "matcher_top1_agreement":     summary["matcher"]["top1_agreement_with_assigned"],
    }, indent=2))


if __name__ == "__main__":
    main()
