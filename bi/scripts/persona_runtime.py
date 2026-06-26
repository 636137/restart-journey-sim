#!/usr/bin/env python3
"""Build per-persona runtime bundle (persona_runtime.json) for the iPhone sim.

For each of the six personas, computes:
  - Max Navigator engagement signals (sms reply pct, push open pct, plan completion,
    cv progress, vacancies, sessions, open barriers)
  - Cox-style survival curve at weeks 1/2/4/8/12/16/20/24 using the trained
    bi/models/survival.json coefficients
  - Calibrated P(success) from the trained bi/models/classifier.json
  - Top 5 SHAP-style positive + top 5 negative contributors per persona
  - Max Navigator score (0-100, derived from weighted signals)
  - State transition row for the persona's scenario band (from bi/models/transitions.json)
  - Audio config: which scenario folder to play, which voice ids

This bundle is loaded by index.html on persona pick to drive every screen
with the persona's actual numbers.
"""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
MODELS = ROOT / "models"
WEB_OUT = ROOT.parent / "persona-runtime.json"  # shipped alongside the sim

PERSONAS = json.loads((DATA / "personas.json").read_text())["personas"]
SURV = json.loads((MODELS / "survival.json").read_text())
CLF = json.loads((MODELS / "classifier.json").read_text())
TRANSITIONS = json.loads((MODELS / "transitions.json").read_text())

# --- per-persona engagement signals (calibrated to scenario band defaults) ---
SIGNALS_BY_PERSONA = {
    "daniel":   {"sms_reply_pct": 92, "push_open_pct": 88, "plan_completion_3": 3, "cv_progress_pct": 90, "vacancies_saved": 9, "sessions_attended_3": 3, "open_barriers": 0},
    "amara":    {"sms_reply_pct": 55, "push_open_pct": 48, "plan_completion_3": 1, "cv_progress_pct": 60, "vacancies_saved": 2, "sessions_attended_3": 2, "open_barriers": 2},
    "wojciech": {"sms_reply_pct": 84, "push_open_pct": 78, "plan_completion_3": 3, "cv_progress_pct": 88, "vacancies_saved": 7, "sessions_attended_3": 3, "open_barriers": 1},
    "tomasz":   {"sms_reply_pct": 28, "push_open_pct": 22, "plan_completion_3": 0, "cv_progress_pct": 35, "vacancies_saved": 1, "sessions_attended_3": 1, "open_barriers": 3},
    "fadumo":   {"sms_reply_pct": 58, "push_open_pct": 52, "plan_completion_3": 2, "cv_progress_pct": 66, "vacancies_saved": 3, "sessions_attended_3": 2, "open_barriers": 2},
    "mark":     {"sms_reply_pct": 75, "push_open_pct": 70, "plan_completion_3": 3, "cv_progress_pct": 80, "vacancies_saved": 6, "sessions_attended_3": 3, "open_barriers": 1},
}

# Adviser metadata
ADVISERS = {
    "Priya Sharma":   {"initials": "PS", "title": "Senior Restart Adviser · Stratford",     "voice_key": "priya"},
    "Hannah Brennan": {"initials": "HB", "title": "Senior Restart Adviser · Rotherham",     "voice_key": "hannah"},
    "Eleri Davies":   {"initials": "ED", "title": "Senior Restart Adviser · Cardiff",       "voice_key": "eleri"},
    "Karen Mensah":   {"initials": "KM", "title": "Senior Restart Adviser · Nottingham",    "voice_key": "karen"},
}


def cox_survival_curve(p):
    """Apply the trained Cox coefficients to this persona's covariates."""
    coefs = SURV["coefficients"]
    baseline = SURV["baseline_survival_at_week"]
    x = {}
    x["barriers_count"]            = p["barriers_count"]
    x["uc_months_at_start"]        = p["uc_months_at_start"]
    x["digital_low"]               = 1 if p["digital_skills"] == "Low" else 0
    x["region_north-london"]       = 1 if p["region"] == "north-london" else 0
    x["region_south-yorkshire"]    = 1 if p["region"] == "south-yorkshire" else 0
    x["region_derbyshire-notts"]   = 1 if p["region"] == "derbyshire-notts" else 0
    x["region_wales"]              = 1 if p["region"] == "wales" else 0
    sector_map = {
        "Warehouse / logistics": "sector_warehouse_logistics",
        "Retail": "sector_retail",
        "Hospitality": "sector_hospitality",
        "Construction": "sector_construction",
    }
    for sec, col in sector_map.items():
        x[col] = 1 if p["prior_sector"] == sec else 0
    # Linear predictor
    lp = sum(coefs.get(k, 0) * v for k, v in x.items())
    # S(t) = S0(t)^exp(lp)
    curve = {}
    for w_str, S0 in baseline.items():
        St = float(S0) ** math.exp(lp)
        curve[w_str] = round(St * 100, 1)
    return curve, lp


def survival_p50(curve):
    """Return earliest week where S(t) <= 50%, else 24."""
    weeks_sorted = sorted([int(w) for w in curve.keys()])
    for w in weeks_sorted:
        if curve[str(w)] <= 50:
            return w
    return 24


def survival_p10(curve):
    """Earliest week S(t) <= 90%."""
    weeks_sorted = sorted([int(w) for w in curve.keys()])
    for w in weeks_sorted:
        if curve[str(w)] <= 90:
            return w
    return 24


def survival_p90(curve):
    """Earliest week S(t) <= 10%."""
    weeks_sorted = sorted([int(w) for w in curve.keys()])
    for w in weeks_sorted:
        if curve[str(w)] <= 10:
            return w
    return 24


def classifier_p_success(p, signals):
    """Apply the trained classifier coefficients."""
    coefs_list = CLF["mean_coefficients"]
    cols = CLF["feature_columns"]
    intercept = CLF["intercept"]
    feature_vec = {}
    feature_vec["sms_reply_pct"]      = signals["sms_reply_pct"]
    feature_vec["push_open_pct"]      = signals["push_open_pct"]
    feature_vec["plan_completion_3"]  = signals["plan_completion_3"]
    feature_vec["cv_progress_pct"]    = signals["cv_progress_pct"]
    feature_vec["vacancies_saved"]    = signals["vacancies_saved"]
    feature_vec["sessions_attended_3"]= signals["sessions_attended_3"]
    feature_vec["open_barriers"]      = signals["open_barriers"]
    feature_vec["disability_flag"]    = 1 if p["disability_or_health"] else 0
    feature_vec["digital_low"]        = 1 if p["digital_skills"] == "Low" else 0
    feature_vec["digital_high"]       = 1 if p["digital_skills"] == "High" else 0
    feature_vec["uc_months_at_start"] = p["uc_months_at_start"]
    # One-hot regions and sectors (the trained classifier expects these)
    for col in cols:
        if col.startswith("region_key_"):
            region = col.replace("region_key_", "")
            feature_vec[col] = 1 if p["region"] == region else 0
        if col.startswith("prior_sector_"):
            sector = col.replace("prior_sector_", "")
            feature_vec[col] = 1 if p["prior_sector"] == sector else 0
    # Linear combination
    x = intercept + sum(c * feature_vec.get(col, 0) for col, c in zip(cols, coefs_list))
    return round(1 / (1 + math.exp(-x)) * 100, 1)


def shap_contributors(p, signals):
    """Top features by signed contribution = coefficient × value."""
    coefs_list = CLF["mean_coefficients"]
    cols = CLF["feature_columns"]
    feature_vec = {}
    feature_vec["sms_reply_pct"]      = signals["sms_reply_pct"]
    feature_vec["push_open_pct"]      = signals["push_open_pct"]
    feature_vec["plan_completion_3"]  = signals["plan_completion_3"]
    feature_vec["cv_progress_pct"]    = signals["cv_progress_pct"]
    feature_vec["vacancies_saved"]    = signals["vacancies_saved"]
    feature_vec["sessions_attended_3"]= signals["sessions_attended_3"]
    feature_vec["open_barriers"]      = signals["open_barriers"]
    feature_vec["disability_flag"]    = 1 if p["disability_or_health"] else 0
    feature_vec["digital_low"]        = 1 if p["digital_skills"] == "Low" else 0
    feature_vec["digital_high"]       = 1 if p["digital_skills"] == "High" else 0
    feature_vec["uc_months_at_start"] = p["uc_months_at_start"]
    for col in cols:
        if col.startswith("region_key_"):
            feature_vec[col] = 1 if p["region"] == col.replace("region_key_", "") else 0
        if col.startswith("prior_sector_"):
            feature_vec[col] = 1 if p["prior_sector"] == col.replace("prior_sector_", "") else 0
    contributions = []
    nice = {
        "sms_reply_pct": "SMS reply rate",
        "push_open_pct": "Push open rate",
        "plan_completion_3": "Action plan completion",
        "cv_progress_pct": "CV progress",
        "vacancies_saved": "Vacancies engaged",
        "sessions_attended_3": "Adviser sessions attended",
        "open_barriers": "Open barriers",
        "disability_flag": "Disability/health",
        "digital_low": "Low digital skills",
        "digital_high": "High digital skills",
        "uc_months_at_start": "UC duration (months)",
    }
    for col, coef in zip(cols, coefs_list):
        if col in feature_vec:
            v = feature_vec[col]
            contrib = coef * v
            if abs(contrib) > 0.001:
                contributions.append((nice.get(col, col), round(contrib, 3), v))
    contributions.sort(key=lambda x: x[1])
    return contributions


def transition_row(scenario_band):
    """Return the trained MLE transition row for the persona's likely from_state."""
    mat = TRANSITIONS["matrices_by_scenario_band"].get(scenario_band, {})
    return mat


def max_navigator_score(signals):
    """Same weighted-sum the sim shows in the Max Navigator overlay."""
    weights = {
        "sms_reply_pct": 0.20,
        "push_open_pct": 0.15,
        "plan_completion_3": 0.15,
        "cv_progress_pct": 0.15,
        "vacancies_saved": 0.10,
        "sessions_attended_3": 0.15,
        "open_barriers": 0.10,  # inverse
    }
    max_values = {"plan_completion_3": 3, "sessions_attended_3": 3, "vacancies_saved": 6, "open_barriers": 4}
    score = 0
    for sig, weight in weights.items():
        if sig == "open_barriers":
            norm = max(0, 1 - signals[sig] / 4)
        elif sig in max_values:
            norm = min(1, signals[sig] / max_values[sig])
        else:
            norm = min(1, signals[sig] / 100)
        score += weight * 100 * norm
    return round(score)


def build():
    out = {"personas": {}}
    for p in PERSONAS:
        pid = p["id"]
        signals = SIGNALS_BY_PERSONA.get(pid, SIGNALS_BY_PERSONA["daniel"])
        curve, lp = cox_survival_curve(p)
        contributions = shap_contributors(p, signals)
        adviser_meta = ADVISERS.get(p["adviser"], ADVISERS["Priya Sharma"])
        p_success = classifier_p_success(p, signals)
        nav_score = max_navigator_score(signals)
        band = "ontrack" if nav_score >= 75 else "drifting" if nav_score >= 50 else "atrisk"
        out["personas"][pid] = {
            "id": pid,
            "name": p["name"],
            "age": p["age"],
            "sex": p["sex"],
            "postcode": p["postcode"],
            "region": p["region"],
            "archetype": p["archetype"],
            "summary": p["summary"],
            "barriers": p["barriers"],
            "barriers_count": p["barriers_count"],
            "preferred_language": p["preferred_language"],
            "adviser": {
                "name": p["adviser"],
                "initials": adviser_meta["initials"],
                "title": adviser_meta["title"],
                "voice_key": adviser_meta["voice_key"],
            },
            "max_navigator": {
                "signals": signals,
                "score": nav_score,
                "band": band,
                "scenario_action_id": p["scenario_band"],  # the action band that drives the overlay scenario
            },
            "trained_classifier": {
                "p_success_pct": p_success,
                "intercept": CLF["intercept"],
                "model_kind": CLF["model_kind"],
            },
            "trained_survival": {
                "curve_by_week": curve,
                "linear_predictor": round(lp, 3),
                "p10_weeks": survival_p10(curve),
                "p50_weeks": survival_p50(curve),
                "p90_weeks": survival_p90(curve),
                "model_kind": SURV["model_kind"],
                "concordance_index": SURV["concordance_index"],
            },
            "trained_transitions": {
                "scenario_band": p["scenario_band"],
                "matrix": transition_row(p["scenario_band"]),
                "model_kind": TRANSITIONS["model_kind"],
            },
            "shap_contributors": [
                {"label": label, "value": val, "polarity": "negative" if val < 0 else "positive"}
                for (label, val, raw) in contributions[:5]
            ] + [
                {"label": label, "value": val, "polarity": "positive"}
                for (label, val, raw) in list(reversed(contributions))[:5]
            ],
            "audio": {
                "scenario_dir": pid,
                "voice_customer": pid,
                "voice_adviser": adviser_meta["voice_key"],
            },
        }
    WEB_OUT.write_text(json.dumps(out, indent=2))
    print(f"wrote {WEB_OUT.name} · {len(out['personas'])} personas")
    return out


if __name__ == "__main__":
    build()
