#!/usr/bin/env python3
"""Max Navigator — four deterministic ML model surfaces.

The output of each model is realistic-looking, auditable, and deterministic
given the input feature vector. Where a real production system would use
gradient boosting + isotonic calibration / Cox PH / two-tower learned ranker,
we use hand-engineered linear-ish formulas with weights tuned to give
plausible curves. The weights are *visible* and *editable*, which is the
demo's whole point: this is grounded math, not an LLM call.

Outputs as CSVs into bi/data/:
  adviser_experience.csv     247 advisers × 6 barriers × 11 sectors × 3 cohort tiers (~16k rows)
  postcode_density.csv       Postcode area job density and median wage
  match_quality.csv          For each customer, the assigned adviser + top-5 alternatives' fit scores
  survival_curves.csv        Per (customer, adviser) pair, survival P(unplaced) at weeks 1/2/4/8/12/16/24
  state_transitions.csv      Per scenario_band, 7×7 transition matrix
  success_snapshots.csv      Daily P(success) snapshot per journey at 8 checkpoints
  feature_contributions.csv  SHAP-style top-3 positive / negative drivers per snapshot
"""
import csv
import json
import math
import random
from pathlib import Path

random.seed(20260626)

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"


def _read_csv(name):
    rows = []
    with open(DATA / name) as f:
        r = csv.DictReader(f)
        for row in r:
            rows.append(row)
    return rows


def _write_csv(name, rows, header=None):
    if not rows:
        print(f"[models] no rows for {name}")
        return
    fieldnames = header or list(rows[0].keys())
    with open(DATA / name, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)
    print(f"[models] wrote {name} · {len(rows)} rows")


# ---------------------------- ENRICHMENT DATA -------------------------------
SECTORS = ["Warehouse / logistics","Retail","Hospitality","Construction","Care / health",
           "Driving","Cleaning / facilities","Admin / office","Manufacturing","Security","Other"]
BARRIERS = ["Transport cost","Childcare cost","Mental health","Physical health",
            "Digital skills","English language","Housing instability",
            "Criminal record","Confidence","Caring responsibilities"]
STATES = ["Start","Progressing","Paused","Stalled","Regressing","Success","Failure"]

# Region demand factor (higher = warmer labour market for Restart's sectors)
REGION_DEMAND = {
    "south-east-london":   1.18,
    "north-london":        1.10,
    "south-yorkshire":     0.95,
    "derbyshire-notts":    0.92,
    "wales":               0.88,
}

# Per-barrier difficulty (1.0 baseline; higher = more drag on placement hazard)
BARRIER_WEIGHT = {
    "Transport cost":        0.08,
    "Childcare cost":        0.14,
    "Mental health":         0.22,
    "Physical health":       0.16,
    "Digital skills":        0.10,
    "English language":      0.12,
    "Housing instability":   0.20,
    "Criminal record":       0.18,
    "Confidence":            0.07,
    "Caring responsibilities": 0.13,
}

# Sector demand multiplier - which sectors have many vacancies currently
SECTOR_DEMAND = {
    "Warehouse / logistics": 1.30,
    "Care / health":         1.25,
    "Driving":               1.15,
    "Construction":          1.10,
    "Cleaning / facilities": 1.05,
    "Hospitality":           1.00,
    "Manufacturing":         0.98,
    "Admin / office":        0.92,
    "Security":              0.90,
    "Retail":                0.85,
    "Other":                 0.90,
}


# ---------------------------- 1. POSTCODE DENSITY ---------------------------
def gen_postcode_density():
    """Vacancy:applicant ratio and median wage by outward postcode area."""
    # Outward postcodes seen in customers + a few extra reference cells
    customer_rows = _read_csv("customers.csv")
    seen = set()
    for r in customer_rows:
        seen.add((r["region_key"], r["postcode_area"]))
    out = []
    for region, postcode in sorted(seen):
        # Demand by region, jittered per postcode area
        d = REGION_DEMAND.get(region, 1.0) * random.uniform(0.85, 1.18)
        wage_base = 25000
        if region in ("south-east-london","north-london"):
            wage_base = 28000
        elif region == "wales":
            wage_base = 23000
        median_wage = int(wage_base * random.uniform(0.92, 1.10))
        out.append({
            "region_key": region,
            "postcode_area": postcode,
            "vacancy_applicant_ratio": round(d, 3),
            "median_wage_gbp": median_wage,
            "live_vacancies": int(random.triangular(80, 420, 180) * d),
            "sector_demand_top": max(SECTOR_DEMAND.items(), key=lambda x: x[1] * random.uniform(0.9,1.1))[0],
        })
    _write_csv("postcode_density.csv", out)
    return out


# ---------------------------- 2. ADVISER EXPERIENCE MATRIX ------------------
def gen_adviser_experience():
    """For each adviser × barrier × sector, an experience score and success rate.

    In production this is fit from prior outcomes; here we make it
    consistent with the adviser's specialisms and tenure (richer
    advisers get higher cell values, specialised cells get a bump).
    """
    advisers = _read_csv("advisers.csv")
    out = []
    for adv in advisers:
        specs = (adv.get("specialisms") or "").lower().split(";")
        tenure = float(adv.get("years_at_maximus") or 5)
        sat = float(adv.get("customer_satisfaction") or 4.5)
        tier = "veteran" if tenure >= 10 else "mid" if tenure >= 3 else "early"
        for sector in SECTORS:
            for barrier in BARRIERS:
                # Base success in this cell
                base = 0.42 + 0.06 * min(tenure, 12) + 0.04 * (sat - 3.5)
                # Specialism bump
                sec_l = sector.lower()
                bar_l = barrier.lower()
                if any(s in spec for s in [sec_l] for spec in specs):
                    base += 0.06
                if any(b in spec for b in [bar_l] for spec in specs):
                    base += 0.08
                # Add noise
                rate = max(0.05, min(0.95, base + random.uniform(-0.07, 0.07)))
                # Sample size hint (more for experienced advisers)
                n = int(random.triangular(2, 60, 18) * (tenure/4))
                out.append({
                    "adviser_id": adv["adviser_id"],
                    "tier": tier,
                    "sector": sector,
                    "barrier": barrier,
                    "success_rate": round(rate, 3),
                    "sample_size": n,
                })
    _write_csv("adviser_experience.csv", out)
    return out


# ---------------------------- 3. MATCH QUALITY  -----------------------------
def fit_score(customer, adviser, adv_exp_idx):
    """Deterministic learned-to-rank style fit score 0-100.

    Components (weights sum to 1):
      sector_affinity      0.22
      barrier_affinity     0.20
      language_match       0.14
      region_match         0.12
      capacity_headroom    0.12  (free slots vs target caseload 50)
      tenure_difficulty    0.10  (don't put hard customers with new advisers)
      sat_baseline         0.10  (adviser customer-sat scaled)
    """
    score = 0.0
    parts = {}

    sector = customer["prior_sector"]
    # Sector affinity
    cell_rate = adv_exp_idx.get((adviser["adviser_id"], sector, customer.get("top_barrier","Confidence")))
    sec_score = (cell_rate or 0.50) * 100
    parts["sector_affinity"] = sec_score
    score += 0.22 * sec_score

    # Barrier affinity (avg over the customer's barriers)
    barriers = [b for b in customer.get("barriers","").split(";") if b]
    bar_scores = [adv_exp_idx.get((adviser["adviser_id"], sector, b), 0.50)*100 for b in barriers] or [50.0]
    bar_score = sum(bar_scores) / len(bar_scores)
    parts["barrier_affinity"] = bar_score
    score += 0.20 * bar_score

    # Language
    langs = (adviser.get("languages","") or "").split(";")
    lang_score = 100.0 if (customer.get("preferred_language","English") in langs or "English" in langs) else 35.0
    parts["language_match"] = lang_score
    score += 0.14 * lang_score

    # Region
    reg_score = 100.0 if adviser.get("region_key") == customer.get("region_key") else 40.0
    parts["region_match"] = reg_score
    score += 0.12 * reg_score

    # Capacity headroom
    caseload = int(adviser.get("caseload_current") or 50)
    headroom = max(0, 60 - caseload) / 28  # 0..~1
    cap_score = min(100, headroom * 100)
    parts["capacity_headroom"] = cap_score
    score += 0.12 * cap_score

    # Tenure vs difficulty
    tenure = float(adviser.get("years_at_maximus") or 5)
    difficulty = len(barriers) + (3 if customer.get("disability_or_health")=="true" else 0)
    td_score = 100.0 if tenure >= 1.5 * difficulty else 60.0 * (tenure / max(1.5*difficulty, 1))
    parts["tenure_difficulty"] = round(td_score, 1)
    score += 0.10 * td_score

    # Customer sat baseline
    sat = float(adviser.get("customer_satisfaction") or 4.5)
    sat_score = (sat - 3.0) / 2.0 * 100  # 3.0..5.0 → 0..100
    parts["sat_baseline"] = round(max(0, min(100, sat_score)), 1)
    score += 0.10 * sat_score

    return round(min(100, max(0, score)), 1), parts


def gen_match_quality():
    """For each customer: assigned adviser fit + top 5 alternatives."""
    customers = _read_csv("customers.csv")
    advisers = _read_csv("advisers.csv")
    adv_exp = _read_csv("adviser_experience.csv")
    adv_exp_idx = {(r["adviser_id"], r["sector"], r["barrier"]): float(r["success_rate"]) for r in adv_exp}
    adv_by_id = {a["adviser_id"]: a for a in advisers}

    out = []
    for i, c in enumerate(customers):
        # Derive customer's "top barrier" as the highest-weight one they have
        barriers = [b for b in c.get("barriers","").split(";") if b]
        top_b = max(barriers, key=lambda b: BARRIER_WEIGHT.get(b, 0.05)) if barriers else "Confidence"
        c = dict(c); c["top_barrier"] = top_b
        # Score 8 candidate advisers: their assigned one + 7 random others from same region
        same_region = [a for a in advisers if a["region_key"] == c["region_key"] and a["adviser_id"] != c["adviser_id"]]
        sample = random.sample(same_region, min(7, len(same_region)))
        candidates = [adv_by_id[c["adviser_id"]]] + sample
        scored = [(a, *fit_score(c, a, adv_exp_idx)) for a in candidates]
        scored.sort(key=lambda x: x[1], reverse=True)
        # Emit one row per (customer, candidate, rank)
        for rank, (adv, score, parts) in enumerate(scored, start=1):
            out.append({
                "customer_id": c["customer_id"],
                "adviser_id": adv["adviser_id"],
                "is_assigned": "true" if adv["adviser_id"] == c["adviser_id"] else "false",
                "rank": rank,
                "fit_score": score,
                "sector_affinity": round(parts["sector_affinity"], 1),
                "barrier_affinity": round(parts["barrier_affinity"], 1),
                "language_match": round(parts["language_match"], 1),
                "region_match": round(parts["region_match"], 1),
                "capacity_headroom": round(parts["capacity_headroom"], 1),
                "tenure_difficulty": round(parts["tenure_difficulty"], 1),
                "sat_baseline": round(parts["sat_baseline"], 1),
            })
        if (i+1) % 2000 == 0:
            print(f"[models]  match-quality {i+1}/{len(customers)}")
    _write_csv("match_quality.csv", out)
    return out


# ---------------------------- 4. SURVIVAL CURVES ----------------------------
WEEK_CHECKPOINTS = [1, 2, 4, 8, 12, 16, 24]


def hazard_rate(customer, adviser, density_idx):
    """Weekly hazard (probability of placement in any given week)."""
    # Baseline weekly hazard
    h = 0.06
    # Sector demand
    h *= SECTOR_DEMAND.get(customer.get("prior_sector","Other"), 1.0)
    # Region demand
    h *= REGION_DEMAND.get(customer.get("region_key","south-east-london"), 1.0)
    # Postcode density
    d_row = density_idx.get((customer.get("region_key"), customer.get("postcode_area")))
    if d_row:
        h *= float(d_row["vacancy_applicant_ratio"])
    # Barriers drag
    barriers = [b for b in customer.get("barriers","").split(";") if b]
    barrier_drag = sum(BARRIER_WEIGHT.get(b, 0.05) for b in barriers)
    h *= max(0.2, 1.0 - barrier_drag)
    # UC duration drag
    uc = int(customer.get("uc_months_at_start","6"))
    h *= max(0.4, 1.0 - 0.012 * max(0, uc - 6))
    # Adviser quality
    sat = float(adviser.get("customer_satisfaction") or 4.5)
    h *= (0.85 + 0.06 * (sat - 3.5))
    # Disability/health
    if customer.get("disability_or_health") == "true":
        h *= 0.78
    # Digital skills
    ds = customer.get("digital_skills","Medium")
    h *= {"Low":0.85,"Medium":1.0,"High":1.08}.get(ds, 1.0)
    return max(0.005, min(0.40, h))


def survival_curve(weekly_h, weeks):
    """S(t) = (1 - h)^t  (discrete-time survival under constant hazard)."""
    return [(w, round((1 - weekly_h)**w * 100, 1)) for w in weeks]


def gen_survival_curves():
    """Per (customer, adviser) where adviser is from match_quality top-3."""
    customers = _read_csv("customers.csv")
    advisers = _read_csv("advisers.csv")
    density = _read_csv("postcode_density.csv")
    density_idx = {(r["region_key"], r["postcode_area"]): r for r in density}
    adv_by_id = {a["adviser_id"]: a for a in advisers}
    matches = _read_csv("match_quality.csv")
    # Only top-3 candidate per customer to keep size sane (~30k rows)
    top3 = {}
    for m in matches:
        key = m["customer_id"]
        top3.setdefault(key, []).append(m)
    out = []
    for cid, rows in top3.items():
        rows.sort(key=lambda r: int(r["rank"]))
        c = next((c for c in customers if c["customer_id"] == cid), None)
        if not c:
            continue
        for r in rows[:3]:
            adv = adv_by_id.get(r["adviser_id"])
            if not adv:
                continue
            h = hazard_rate(c, adv, density_idx)
            curve = survival_curve(h, WEEK_CHECKPOINTS)
            row = {
                "customer_id": cid,
                "adviser_id": adv["adviser_id"],
                "rank": r["rank"],
                "weekly_hazard": round(h, 4),
                "median_weeks_to_placement": round(math.log(0.5) / math.log(1 - h), 1),
            }
            for w, s in curve:
                row[f"survival_w{w}"] = s
            out.append(row)
    _write_csv("survival_curves.csv", out)
    return out


# ---------------------------- 5. STATE TRANSITIONS --------------------------
def gen_state_transitions():
    """7×7 transition probability matrix per scenario band.

    Calibrated so:
      ON-TRACK : strong forward flow (Start→Progressing→Success), low backflow
      DRIFTING : mostly stays in Progressing/Paused, some regression
      AT-RISK  : high probability of Stalled/Regressing/Failure
    """
    matrices = {
        "ontrack": {
            "Start":       {"Start":0.05, "Progressing":0.80, "Paused":0.05, "Stalled":0.03, "Regressing":0.02, "Success":0.03, "Failure":0.02},
            "Progressing": {"Start":0.00, "Progressing":0.72, "Paused":0.06, "Stalled":0.04, "Regressing":0.03, "Success":0.13, "Failure":0.02},
            "Paused":      {"Start":0.00, "Progressing":0.55, "Paused":0.30, "Stalled":0.06, "Regressing":0.04, "Success":0.03, "Failure":0.02},
            "Stalled":     {"Start":0.00, "Progressing":0.42, "Paused":0.18, "Stalled":0.25, "Regressing":0.08, "Success":0.04, "Failure":0.03},
            "Regressing":  {"Start":0.00, "Progressing":0.28, "Paused":0.18, "Stalled":0.20, "Regressing":0.22, "Success":0.06, "Failure":0.06},
            "Success":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":1.00, "Failure":0.00},
            "Failure":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":0.00, "Failure":1.00},
        },
        "drifting": {
            "Start":       {"Start":0.10, "Progressing":0.50, "Paused":0.20, "Stalled":0.10, "Regressing":0.05, "Success":0.02, "Failure":0.03},
            "Progressing": {"Start":0.00, "Progressing":0.45, "Paused":0.20, "Stalled":0.15, "Regressing":0.08, "Success":0.08, "Failure":0.04},
            "Paused":      {"Start":0.00, "Progressing":0.30, "Paused":0.40, "Stalled":0.16, "Regressing":0.07, "Success":0.02, "Failure":0.05},
            "Stalled":     {"Start":0.00, "Progressing":0.18, "Paused":0.22, "Stalled":0.38, "Regressing":0.14, "Success":0.02, "Failure":0.06},
            "Regressing":  {"Start":0.00, "Progressing":0.12, "Paused":0.18, "Stalled":0.22, "Regressing":0.30, "Success":0.04, "Failure":0.14},
            "Success":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":1.00, "Failure":0.00},
            "Failure":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":0.00, "Failure":1.00},
        },
        "atrisk": {
            "Start":       {"Start":0.18, "Progressing":0.22, "Paused":0.20, "Stalled":0.20, "Regressing":0.10, "Success":0.02, "Failure":0.08},
            "Progressing": {"Start":0.00, "Progressing":0.25, "Paused":0.22, "Stalled":0.25, "Regressing":0.15, "Success":0.05, "Failure":0.08},
            "Paused":      {"Start":0.00, "Progressing":0.15, "Paused":0.30, "Stalled":0.25, "Regressing":0.15, "Success":0.01, "Failure":0.14},
            "Stalled":     {"Start":0.00, "Progressing":0.08, "Paused":0.18, "Stalled":0.42, "Regressing":0.20, "Success":0.01, "Failure":0.11},
            "Regressing":  {"Start":0.00, "Progressing":0.05, "Paused":0.12, "Stalled":0.25, "Regressing":0.32, "Success":0.01, "Failure":0.25},
            "Success":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":1.00, "Failure":0.00},
            "Failure":     {"Start":0.00, "Progressing":0.00, "Paused":0.00, "Stalled":0.00, "Regressing":0.00, "Success":0.00, "Failure":1.00},
        },
    }
    out = []
    for band, mat in matrices.items():
        for from_state, transitions in mat.items():
            for to_state, p in transitions.items():
                out.append({
                    "scenario_band": band,
                    "from_state": from_state,
                    "to_state": to_state,
                    "probability": p,
                })
    _write_csv("state_transitions.csv", out)
    return out


# ---------------------------- 6. SUCCESS SNAPSHOTS  -------------------------
CHECKPOINTS = ["week_1","week_2","week_4","week_8","week_12","week_16","week_20","week_24"]


def success_probability(customer, journey, week):
    """Logistic-ish: P(success) at week N for this journey."""
    # Linear combination
    x = -1.5  # intercept (low base)
    # Signals from the journey itself
    x += 0.020 * float(journey.get("sms_reply_pct") or 0)
    x += 0.012 * float(journey.get("push_open_pct") or 0)
    x += 0.30 * float(journey.get("plan_completion_3") or 0)
    x += 0.018 * float(journey.get("cv_progress_pct") or 0)
    x += 0.16 * float(journey.get("vacancies_saved") or 0)
    x += 0.35 * float(journey.get("sessions_attended_3") or 0)
    x -= 0.40 * float(journey.get("open_barriers") or 0)
    # Sector demand
    x += 0.5 * (SECTOR_DEMAND.get(customer.get("prior_sector","Other"), 1.0) - 1.0)
    # Region demand
    x += 0.4 * (REGION_DEMAND.get(customer.get("region_key","south-east-london"), 1.0) - 1.0)
    # Drift with time: optimism reduces as weeks pass without progress (only when not Success yet)
    week_factor = 1.0 + (week - 4) * 0.02
    x *= week_factor
    p = 1 / (1 + math.exp(-x))
    return round(p * 100, 1)


def shap_top_contributors(customer, journey, week):
    """Approximate per-feature contribution for the SHAP-style panel."""
    items = []
    items.append(("SMS reply rate", 0.020 * float(journey.get("sms_reply_pct") or 0)))
    items.append(("Push open rate", 0.012 * float(journey.get("push_open_pct") or 0)))
    items.append(("Action plan completion", 0.30 * float(journey.get("plan_completion_3") or 0)))
    items.append(("CV progress", 0.018 * float(journey.get("cv_progress_pct") or 0)))
    items.append(("Vacancies engaged", 0.16 * float(journey.get("vacancies_saved") or 0)))
    items.append(("Adviser sessions attended", 0.35 * float(journey.get("sessions_attended_3") or 0)))
    items.append(("Open barriers", -0.40 * float(journey.get("open_barriers") or 0)))
    items.append(("Sector demand", 0.5 * (SECTOR_DEMAND.get(customer.get("prior_sector","Other"),1.0) - 1.0)))
    items.append(("Region demand", 0.4 * (REGION_DEMAND.get(customer.get("region_key","south-east-london"),1.0) - 1.0)))
    items.sort(key=lambda x: x[1])
    neg = items[:3]
    pos = list(reversed(items))[:3]
    return pos, neg


def gen_success_snapshots():
    customers = _read_csv("customers.csv")
    journeys = _read_csv("journeys.csv")
    j_by_c = {j["customer_id"]: j for j in journeys}
    cust_by_id = {c["customer_id"]: c for c in customers}
    out_snap = []
    out_contrib = []
    for j in journeys:
        c = cust_by_id.get(j["customer_id"])
        if not c:
            continue
        for week in [1,2,4,8,12,16,20,24]:
            p = success_probability(c, j, week)
            out_snap.append({
                "customer_id": c["customer_id"],
                "journey_id": j["journey_id"],
                "adviser_id": j["adviser_id"],
                "region_key": c["region_key"],
                "scenario_band": j["scenario_band"],
                "week": week,
                "success_probability": p,
            })
            # Contributions for week 12 only (one snapshot per journey for the dash)
            if week == 12:
                pos, neg = shap_top_contributors(c, j, week)
                for label, val in pos:
                    out_contrib.append({
                        "customer_id": c["customer_id"],
                        "journey_id": j["journey_id"],
                        "polarity": "positive",
                        "feature": label,
                        "contribution": round(val, 3),
                    })
                for label, val in neg:
                    out_contrib.append({
                        "customer_id": c["customer_id"],
                        "journey_id": j["journey_id"],
                        "polarity": "negative",
                        "feature": label,
                        "contribution": round(val, 3),
                    })
    _write_csv("success_snapshots.csv", out_snap)
    _write_csv("feature_contributions.csv", out_contrib)
    return out_snap, out_contrib


def main():
    print("[models] postcode_density ...")
    gen_postcode_density()
    print("[models] adviser_experience ...")
    gen_adviser_experience()
    print("[models] match_quality ...")
    gen_match_quality()
    print("[models] survival_curves ...")
    gen_survival_curves()
    print("[models] state_transitions ...")
    gen_state_transitions()
    print("[models] success_snapshots + feature_contributions ...")
    gen_success_snapshots()
    print("[models] DONE")


if __name__ == "__main__":
    main()
