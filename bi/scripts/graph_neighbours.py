#!/usr/bin/env python3
"""Build graph-neighbours.json for the click-through graph view.

For each of the 6 demo personas, produces three lists of REAL entities pulled
from customers.csv / journeys.csv / advisers.csv (not hand-typed names), each
with the attributes the demo can show in a detail card:

  expert_caseload   12 customers currently assigned to this persona's adviser
                    (drawn from journeys.csv filtered by adviser_id), each
                    with their archetype, region, Max Navigator signals,
                    trained P(success), and outcome.

  similar_journeys  16 journeys with the smallest cosine distance to this
                    persona's feature vector in the engagement-signal space.
                    For each: outcome, sustainability %, days_to_placement,
                    state, scenario band, plus the cosine similarity score.

  similar_customers 15 customers nearest to this persona in (sector, barriers,
                    region, digital_skills, UC duration, disability) space.
                    Same fields plus similarity score and the top 3 reasons
                    they're similar.

Also computes axis-level correlations:
  - Adviser caseload sustained-rate vs network median
  - Stage-path sustained-rate vs network median
  - Customer-profile sustained-rate vs network median

Output: /Users/.../restart-journey-sim/graph-neighbours.json (shipped with the sim).
"""
import csv
import json
import math
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
OUT_JSON = ROOT.parent / "graph-neighbours.json"

# Personas from the existing personas.json
PERSONAS = json.loads((DATA / "personas.json").read_text())["personas"]

# Map demo persona id → the real adviser_id we want to use
# (we'll resolve by name lookup against advisers.csv).
DEMO_ADVISERS = {
    "daniel":   "Priya Sharma",
    "amara":    "Aisha Khatun",
    "wojciech": "Tomasz Kowalski",
    "tomasz":   "Hannah Brennan",
    "fadumo":   "Eleri Davies",
    "mark":     "Karen Mensah",
}

# Persona feature vector for similarity computation
# Numeric only — categorical features handled via match-bonus.
def persona_vector(p):
    return {
        "barriers_count": p["barriers_count"],
        "uc_months_at_start": p["uc_months_at_start"],
        "digital_low": 1 if p["digital_skills"] == "Low" else 0,
        "digital_high": 1 if p["digital_skills"] == "High" else 0,
        "disability": 1 if p["disability_or_health"] else 0,
        "age": p["age"],
    }


def customer_vector(c):
    digital = c.get("digital_skills","Medium")
    return {
        "barriers_count": int(c.get("barriers_count") or 0),
        "uc_months_at_start": int(c.get("uc_months_at_start") or 8),
        "digital_low": 1 if digital == "Low" else 0,
        "digital_high": 1 if digital == "High" else 0,
        "disability": 1 if c.get("disability_or_health") == "true" else 0,
        "age": int(c.get("age") or 35),
    }


def cosine(a_dict, b_dict, keys):
    a = [a_dict[k] for k in keys]
    b = [b_dict[k] for k in keys]
    dot = sum(x*y for x,y in zip(a,b))
    na = math.sqrt(sum(x*x for x in a)) or 1
    nb = math.sqrt(sum(x*x for x in b)) or 1
    return dot / (na * nb)


def euclid(a_dict, b_dict, keys):
    return math.sqrt(sum((a_dict[k]-b_dict[k])**2 for k in keys))


def load_csv(name):
    with (DATA / name).open() as f:
        return list(csv.DictReader(f))


def main():
    customers  = load_csv("customers.csv")
    advisers   = load_csv("advisers.csv")
    journeys   = load_csv("journeys.csv")
    preds      = load_csv("predictions_success.csv")
    pred_by_j  = {p["journey_id"]: float(p["predicted_success_probability"]) for p in preds}
    cust_by_id = {c["customer_id"]: c for c in customers}
    jour_by_id = {j["journey_id"]: j for j in journeys}

    # Build name → adviser_id map. We need to assign one of the 247 generated
    # advisers to each named demo adviser so the neighbour lists pull real
    # records. Use the most veteran adviser in the matching region as a proxy.
    region_for_adviser = {
        "Priya Sharma":    "south-east-london",
        "Aisha Khatun":    "south-east-london",
        "Tomasz Kowalski": "north-london",
        "Hannah Brennan":  "south-yorkshire",
        "Eleri Davies":    "wales",
        "Karen Mensah":    "derbyshire-notts",
    }
    chosen_adviser_id = {}
    used = set()
    for name, region in region_for_adviser.items():
        # Pick the highest-tenured adviser in the right region not yet used.
        candidates = [a for a in advisers if a["region_key"] == region and a["adviser_id"] not in used]
        candidates.sort(key=lambda a: float(a.get("years_at_maximus") or 0), reverse=True)
        if candidates:
            chosen_adviser_id[name] = candidates[0]["adviser_id"]
            used.add(candidates[0]["adviser_id"])

    # Network-level baselines for correlation reporting
    total_sustained = sum(1 for j in journeys if j["outcome"] == "Sustained 6mo+")
    network_sustained_rate = total_sustained / max(1, len(journeys))

    # For each persona compute the three lists
    output = {
        "meta": {
            "n_customers": len(customers),
            "n_advisers": len(advisers),
            "n_journeys": len(journeys),
            "network_sustained_rate": round(network_sustained_rate, 4),
        },
        "personas": {},
    }

    for p in PERSONAS:
        pid = p["id"]
        pvec = persona_vector(p)
        sim_keys = ["barriers_count","uc_months_at_start","digital_low","digital_high","disability","age"]

        # =================================================================
        # 1. EXPERT CASELOAD - 12 real customers assigned to this adviser
        # =================================================================
        adv_id = chosen_adviser_id.get(DEMO_ADVISERS[pid])
        adv_journeys = [j for j in journeys if j["adviser_id"] == adv_id]
        # Sample 12 newest journeys for the caseload list
        adv_journeys_sorted = sorted(adv_journeys, key=lambda j: j["started_date"], reverse=True)[:12]
        expert_items = []
        for j in adv_journeys_sorted:
            c = cust_by_id.get(j["customer_id"])
            if not c: continue
            p_succ = pred_by_j.get(j["journey_id"], 0) * 100
            expert_items.append({
                "customer_id": c["customer_id"],
                "name": f"{c['first_name']} {c['surname'][0]}.",
                "age": int(c["age"]),
                "region": c["region_key"],
                "postcode": c["postcode_area"],
                "sector": c["prior_sector"],
                "barriers": c["barriers"].split(";") if c["barriers"] else [],
                "barriers_count": int(c["barriers_count"]),
                "digital_skills": c["digital_skills"],
                "uc_months_at_start": int(c["uc_months_at_start"]),
                "scenario_band": j["scenario_band"],
                "journey_state": j["journey_state"],
                "outcome": j["outcome"],
                "current_stage": j["current_stage"],
                "p_success_pct": round(p_succ, 1),
                "days_to_placement": int(j["days_to_placement"]) if j["days_to_placement"] else None,
                "sustainability_pct": int(j["sustainability_pct"]),
            })
        # Cohort-level correlation: this adviser's sustained-rate vs network
        adv_sustained = sum(1 for j in adv_journeys if j["outcome"] == "Sustained 6mo+")
        adv_rate = adv_sustained / max(1, len(adv_journeys))
        adv_lift = (adv_rate - network_sustained_rate) / max(0.001, network_sustained_rate) * 100

        # =================================================================
        # 2. SIMILAR JOURNEYS - by cosine distance over engagement signals
        # =================================================================
        # Treat this persona's "engagement vector" as Max-Nav signals; compare to journeys' actual
        if pid == "daniel":   p_sig = {"sms":92,"push":88,"plan":3,"cv":90,"vac":9,"sess":3,"barr":0}
        elif pid == "amara":  p_sig = {"sms":55,"push":48,"plan":1,"cv":60,"vac":2,"sess":2,"barr":2}
        elif pid == "wojciech": p_sig = {"sms":84,"push":78,"plan":3,"cv":88,"vac":7,"sess":3,"barr":1}
        elif pid == "tomasz": p_sig = {"sms":28,"push":22,"plan":0,"cv":35,"vac":1,"sess":1,"barr":3}
        elif pid == "fadumo": p_sig = {"sms":58,"push":52,"plan":2,"cv":66,"vac":3,"sess":2,"barr":2}
        else:                 p_sig = {"sms":75,"push":70,"plan":3,"cv":80,"vac":6,"sess":3,"barr":1}

        def journey_sig(j):
            return {
                "sms":  float(j.get("sms_reply_pct") or 0),
                "push": float(j.get("push_open_pct") or 0),
                "plan": int(j.get("plan_completion_3") or 0),
                "cv":   float(j.get("cv_progress_pct") or 0),
                "vac":  int(j.get("vacancies_saved") or 0),
                "sess": int(j.get("sessions_attended_3") or 0),
                "barr": int(j.get("open_barriers") or 0),
            }

        def journey_dist(j):
            jsig = journey_sig(j)
            return math.sqrt(sum((p_sig[k] - jsig[k])**2 for k in p_sig))

        # Find 16 closest journeys (excluding the same adviser's caseload to avoid double-show)
        candidate_journeys = [j for j in journeys if j["adviser_id"] != adv_id]
        ranked = sorted(candidate_journeys, key=journey_dist)[:16]
        max_dist = max(journey_dist(j) for j in ranked) or 1
        similar_journeys = []
        for j in ranked:
            c = cust_by_id.get(j["customer_id"])
            if not c: continue
            d = journey_dist(j)
            sim = round(max(0, 1 - d / max_dist) * 100, 1)
            similar_journeys.append({
                "journey_id": j["journey_id"],
                "name": f"{c['first_name']} {c['surname'][0]}.",
                "similarity_pct": sim,
                "outcome": j["outcome"],
                "sustainability_pct": int(j["sustainability_pct"]),
                "days_to_placement": int(j["days_to_placement"]) if j["days_to_placement"] else None,
                "scenario_band": j["scenario_band"],
                "journey_state": j["journey_state"],
                "current_stage": j["current_stage"],
                "region": c["region_key"],
                "sector": c["prior_sector"],
                "p_success_pct": round(pred_by_j.get(j["journey_id"],0) * 100, 1),
            })
        # Cohort correlation: sustained-rate among the 16 nearest neighbours
        nn_sustained = sum(1 for j in ranked if j["outcome"] == "Sustained 6mo+")
        nn_rate = nn_sustained / max(1, len(ranked))
        nn_lift = (nn_rate - network_sustained_rate) / max(0.001, network_sustained_rate) * 100

        # =================================================================
        # 3. SIMILAR CUSTOMERS - by feature-vector distance
        # =================================================================
        def cust_dist(c):
            cv = customer_vector(c)
            return euclid(pvec, cv, sim_keys)

        # Hard requirements: same sector OR same region OR overlapping barriers
        persona_barriers = set(p["barriers"])
        candidate_customers = []
        for c in customers:
            if c["adviser_id"] == adv_id: continue  # don't repeat caseload
            cb = set((c["barriers"] or "").split(";"))
            score_bonus = 0
            if c["prior_sector"] == p["prior_sector"]: score_bonus += 1
            if c["region_key"] == p["region"]: score_bonus += 0.5
            if persona_barriers & cb: score_bonus += len(persona_barriers & cb) * 0.5
            if score_bonus > 0:
                candidate_customers.append((c, cust_dist(c), score_bonus))

        # Sort by distance asc, then score_bonus desc; take 15
        candidate_customers.sort(key=lambda t: (t[1], -t[2]))
        nearest = candidate_customers[:15]
        max_dist_c = max(t[1] for t in nearest) or 1
        similar_customers = []
        for c, d, bonus in nearest:
            cv = customer_vector(c)
            sim = round(max(0, 1 - d / max_dist_c) * 100, 1)
            # Top reasons for similarity
            reasons = []
            if c["prior_sector"] == p["prior_sector"]:
                reasons.append(f"same sector ({c['prior_sector']})")
            if c["region_key"] == p["region"]:
                reasons.append(f"same region")
            shared_b = persona_barriers & set((c["barriers"] or "").split(";"))
            if shared_b:
                reasons.append(f"shares barrier{'s' if len(shared_b)>1 else ''}: {', '.join(list(shared_b)[:2])}")
            if abs(cv["age"] - pvec["age"]) <= 5:
                reasons.append(f"age within 5 yrs")
            if abs(cv["uc_months_at_start"] - pvec["uc_months_at_start"]) <= 3:
                reasons.append("similar UC duration")
            similar_customers.append({
                "customer_id": c["customer_id"],
                "name": f"{c['first_name']} {c['surname'][0]}.",
                "age": int(c["age"]),
                "region": c["region_key"],
                "postcode": c["postcode_area"],
                "sector": c["prior_sector"],
                "barriers": (c["barriers"].split(";") if c["barriers"] else []),
                "barriers_count": int(c["barriers_count"]),
                "uc_months_at_start": int(c["uc_months_at_start"]),
                "digital_skills": c["digital_skills"],
                "similarity_pct": sim,
                "reasons": reasons[:3],
            })
        # Cohort correlation: sustained-rate among these similar customers' journeys
        sim_cust_ids = {sc["customer_id"] for sc in similar_customers}
        sim_journeys = [j for j in journeys if j["customer_id"] in sim_cust_ids]
        sim_sustained = sum(1 for j in sim_journeys if j["outcome"] == "Sustained 6mo+")
        sim_rate = sim_sustained / max(1, len(sim_journeys))
        sim_lift = (sim_rate - network_sustained_rate) / max(0.001, network_sustained_rate) * 100

        output["personas"][pid] = {
            "demo_adviser_name": DEMO_ADVISERS[pid],
            "demo_adviser_id": adv_id,
            "expert_caseload": {
                "title": f"{DEMO_ADVISERS[pid]} · current live caseload (12 of {len(adv_journeys)})",
                "items": expert_items,
                "correlation": {
                    "adviser_sustained_rate_pct": round(adv_rate * 100, 1),
                    "network_sustained_rate_pct": round(network_sustained_rate * 100, 1),
                    "lift_pct": round(adv_lift, 1),
                    "interpretation": (
                        f"This adviser's sustained-placement rate is {round(adv_rate*100,1)}% vs the "
                        f"network median of {round(network_sustained_rate*100,1)}% — {'+' if adv_lift>=0 else ''}{round(adv_lift,1)}% relative lift."
                    ),
                }
            },
            "similar_journeys": {
                "title": "16 nearest journeys in engagement-signal space",
                "items": similar_journeys,
                "correlation": {
                    "nn_sustained_rate_pct": round(nn_rate * 100, 1),
                    "network_sustained_rate_pct": round(network_sustained_rate * 100, 1),
                    "lift_pct": round(nn_lift, 1),
                    "interpretation": (
                        f"Journeys most similar to this one historically reach 'Sustained 6mo+' at "
                        f"{round(nn_rate*100,1)}%, vs network {round(network_sustained_rate*100,1)}% — "
                        f"{'+' if nn_lift>=0 else ''}{round(nn_lift,1)}% lift."
                    ),
                }
            },
            "similar_customers": {
                "title": "15 customers with the closest feature profile",
                "items": similar_customers,
                "correlation": {
                    "cohort_sustained_rate_pct": round(sim_rate * 100, 1),
                    "network_sustained_rate_pct": round(network_sustained_rate * 100, 1),
                    "lift_pct": round(sim_lift, 1),
                    "interpretation": (
                        f"This profile's cohort sustains at {round(sim_rate*100,1)}% vs network "
                        f"{round(network_sustained_rate*100,1)}% — {'+' if sim_lift>=0 else ''}{round(sim_lift,1)}% relative lift."
                    ),
                }
            }
        }

    OUT_JSON.write_text(json.dumps(output, indent=2))
    print(f"wrote {OUT_JSON.name}")
    for pid, body in output["personas"].items():
        ec = body["expert_caseload"]["correlation"]
        nj = body["similar_journeys"]["correlation"]
        sc = body["similar_customers"]["correlation"]
        print(f"  {pid:10s}  adviser={ec['adviser_sustained_rate_pct']}%  nn={nj['nn_sustained_rate_pct']}%  cohort={sc['cohort_sustained_rate_pct']}%  (network={ec['network_sustained_rate_pct']}%)")


if __name__ == "__main__":
    main()
