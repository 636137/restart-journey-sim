#!/usr/bin/env python3
"""Generate 10,287 synthetic Restart Scheme records spread across six tables.

Matches the Max Router data parameters used in the sim:
  - 7 weighted engagement signals (sms_reply_pct, push_open_pct, plan_progress,
    cv_progress_pct, vacancies_saved, sessions_attended, open_barriers).
  - 3 scenario bands (ontrack >=75, drifting 50-74, atrisk <50).
  - 12 journey stages with realistic timing per cohort.

Outputs CSVs into bi/data/:
  customers.csv         10,287 rows
  advisers.csv             247 rows
  journeys.csv          10,287 rows (1:1 with customers)
  journey_stages.csv  ~120,000 rows (12 stages x customer, varying)
  router_scores.csv     ~10,000 rows
  outcomes_kpis.csv     ~3,650 daily rows (region x adviser x day - aggregated)
"""
import csv
import hashlib
import os
import random
from datetime import date, datetime, timedelta
from pathlib import Path

random.seed(20260626)  # Stable demo data on every run.

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data"
OUT.mkdir(parents=True, exist_ok=True)

# --- Reference data ---
# UK Restart delivery regions where Maximus operates
REGIONS = [
    {"key": "south-east-london",   "label": "South & East London",        "weight": 0.32, "stations": ["Stratford","Plaistow","Beckton","Bow","Hackney","Newham"]},
    {"key": "south-yorkshire",     "label": "South & West Yorkshire",     "weight": 0.18, "stations": ["Sheffield","Rotherham","Doncaster","Barnsley","Wakefield","Leeds"]},
    {"key": "derbyshire-notts",    "label": "Derbyshire & Nottinghamshire","weight": 0.16, "stations": ["Nottingham","Derby","Mansfield","Chesterfield","Worksop"]},
    {"key": "wales",               "label": "Wales",                       "weight": 0.20, "stations": ["Cardiff","Swansea","Newport","Wrexham","Bangor"]},
    {"key": "north-london",        "label": "North & West London",         "weight": 0.14, "stations": ["Camden","Brent","Ealing","Harrow","Haringey"]},
]

POSTCODE_AREAS = {
    "south-east-london":   ["E20","E15","E13","E6","E3","E2","SE1","SE10","SE15"],
    "south-yorkshire":     ["S1","S6","S10","S60","DN1","DN4","WF1","LS9"],
    "derbyshire-notts":    ["NG1","NG7","NG18","DE1","DE22","S40","S81"],
    "wales":               ["CF10","CF24","SA1","NP19","NP20","LL11","LL57"],
    "north-london":        ["NW1","NW3","NW10","HA1","HA9","UB1","N1","N17"],
}

FIRST_M = ["Daniel","Mohammed","Aaron","Tyrese","Ashley","Liam","Jamal","Marcus","Connor","Reece","Bilal","Kwame","Aiden","Joel","Damian","Junior","Kai","Nasir","Yusuf","Olu","Ibrahim","Joshua","Callum","Dylan","Femi","Theo","Ryan","Sean","Tom"]
FIRST_F = ["Sarah","Aisha","Priya","Naomi","Chantelle","Maria","Bibi","Kelly","Tia","Leah","Folake","Halima","Amina","Joy","Sade","Lola","Yvonne","Tracy","Demi","Tamika","Megan","Faye","Sophie","Ellie","Ruth"]
SURNAMES = ["Okafor","Singh","Patel","Williams","Adekoya","Brown","Hussain","Khan","Davies","Evans","Walker","Roberts","Taylor","Mensah","Ahmed","Begum","O'Connor","Murphy","Jones","Ali","Akin","Iwobi","Ofori","Mahmood","Knight","Hollis","Bailey","Lewis","Carter"]

ETHNICITIES = [
    ("White British", 0.42), ("Black African", 0.13), ("Black Caribbean", 0.07),
    ("Asian Indian", 0.08), ("Asian Pakistani", 0.07), ("Asian Bangladeshi", 0.04),
    ("Mixed", 0.07), ("Other White", 0.06), ("Other Asian", 0.03), ("Other", 0.03),
]
PRIOR_SECTORS = [
    ("Warehouse / logistics", 0.18), ("Retail", 0.15), ("Hospitality", 0.13),
    ("Construction", 0.10), ("Care / health", 0.10), ("Driving", 0.08),
    ("Cleaning / facilities", 0.07), ("Admin / office", 0.06),
    ("Manufacturing", 0.05), ("Security", 0.04), ("Other", 0.04),
]
BARRIERS = [
    "Transport cost", "Childcare cost", "Mental health", "Physical health",
    "Digital skills", "English language", "Housing instability",
    "Criminal record", "Confidence", "Caring responsibilities",
]
EMPLOYMENT_OUTCOMES = ["Sustained 6mo+", "Placed - in progress", "Placed - dropped", "Withdrawn", "Sanctioned referral", "Ongoing"]

JOURNEY_STAGES = [
    ("referral",         "sms",   1),
    ("diagnostic",       "sms",   3),
    ("nudgeDiagnostic",  "push",  4),
    ("actionplan",       "email", 8),
    ("skills",           "push", 15),
    ("routerCheck",      "system",30),
    ("jobmatch",         "push", 45),
    ("interview",        "sms",  60),
    ("nudgeNightBefore", "push", 65),
    ("nudgeMorningOf",   "push", 66),
    ("offer",            "email",70),
    ("nudgeFirstDay",    "push", 80),
    ("insupport",        "push", 85),
]


def weighted_pick(items):
    total = sum(w for _,w in items)
    r = random.random() * total
    acc = 0
    for v,w in items:
        acc += w
        if r <= acc:
            return v
    return items[-1][0]


def pick_region():
    return weighted_pick([(r["key"], r["weight"]) for r in REGIONS])


def gen_advisers(n=247):
    advisers = []
    for i in range(1, n+1):
        adv_id = f"ADV-{i:04d}"
        region = pick_region()
        first = random.choice(FIRST_F + FIRST_M)
        surname = random.choice(SURNAMES)
        # Specialisms
        sp = random.sample(["Warehouse/logistics","Health/care","Hospitality","Construction","Tech/digital","Returners","Mental health","Disability","Refugee","Older workers"], k=random.choice([2,3]))
        years = round(random.triangular(0.5, 18, 6), 1)
        caseload = random.randint(32, 78)
        sat = round(random.triangular(3.4, 4.95, 4.5), 2)
        langs = random.sample(["English","Polish","Urdu","Bengali","Somali","Welsh","Romanian","Punjabi","Yoruba","Tigrinya"], k=random.choice([1,1,2,3]))
        advisers.append({
            "adviser_id": adv_id,
            "first_name": first,
            "surname": surname,
            "region_key": region,
            "region_label": next(r["label"] for r in REGIONS if r["key"]==region),
            "office": random.choice(POSTCODE_AREAS[region]),
            "years_at_maximus": years,
            "specialisms": ";".join(sp),
            "languages": ";".join(langs),
            "caseload_current": caseload,
            "customer_satisfaction": sat,
            "is_active": "true",
        })
    return advisers


def gen_customer(i, advisers):
    region = pick_region()
    sex = random.choices(["M","F","Other"], weights=[0.62, 0.36, 0.02])[0]
    if sex == "M":
        first = random.choice(FIRST_M)
    elif sex == "F":
        first = random.choice(FIRST_F)
    else:
        first = random.choice(FIRST_F + FIRST_M)
    surname = random.choice(SURNAMES)
    age = int(random.triangular(19, 64, 38))
    uc_months = int(random.triangular(6, 60, 14))
    barriers_n = random.choices([0,1,2,3,4], weights=[0.18,0.36,0.28,0.13,0.05])[0]
    barriers = random.sample(BARRIERS, k=barriers_n) if barriers_n else []
    sector = weighted_pick(PRIOR_SECTORS)
    disability = random.random() < 0.21
    digital = random.choices(["Low","Medium","High"], weights=[0.18, 0.55, 0.27])[0]
    eligible_adv = [a for a in advisers if a["region_key"] == region]
    adviser = random.choice(eligible_adv if eligible_adv else advisers)
    referred_at = date(2025, 9, 1) + timedelta(days=random.randint(0, 260))
    return {
        "customer_id": f"CUS-{i:05d}",
        "first_name": first,
        "surname": surname,
        "age": age,
        "sex": sex,
        "ethnicity": weighted_pick(ETHNICITIES),
        "region_key": region,
        "postcode_area": random.choice(POSTCODE_AREAS[region]),
        "prior_sector": sector,
        "uc_months_at_start": uc_months,
        "barriers": ";".join(barriers),
        "barriers_count": len(barriers),
        "disability_or_health": "true" if disability else "false",
        "digital_skills": digital,
        "preferred_channel": random.choices(["sms","push","email","call"], weights=[0.45, 0.30, 0.15, 0.10])[0],
        "adviser_id": adviser["adviser_id"],
        "referred_date": referred_at.isoformat(),
    }


def compute_signals(customer, scenario):
    """Deterministic-ish signals per scenario band, with cohort noise."""
    if scenario == "ontrack":
        sms = random.uniform(80, 99)
        push = random.uniform(75, 95)
        plan = random.choice([3, 3, 3, 2])
        cv = random.uniform(82, 100)
        vacs = random.randint(5, 12)
        sess = random.choice([3, 3, 2])
        open_b = max(0, customer["barriers_count"] - random.randint(2,3))
    elif scenario == "drifting":
        sms = random.uniform(45, 70)
        push = random.uniform(40, 65)
        plan = random.choice([1, 1, 2])
        cv = random.uniform(40, 75)
        vacs = random.randint(1, 5)
        sess = random.choice([1, 2, 2])
        open_b = max(0, customer["barriers_count"] - 1)
    else:  # atrisk
        sms = random.uniform(10, 40)
        push = random.uniform(5, 35)
        plan = random.choice([0, 0, 1])
        cv = random.uniform(10, 45)
        vacs = random.randint(0, 3)
        sess = random.choice([0, 1, 1])
        open_b = max(customer["barriers_count"], random.randint(2, 4))
    return sms, push, plan, cv, vacs, sess, open_b


def scenario_for(customer):
    # Bias scenario by barriers + digital + UC months
    score = 0
    score -= customer["barriers_count"] * 0.18
    if customer["digital_skills"] == "Low":
        score -= 0.20
    elif customer["digital_skills"] == "High":
        score += 0.10
    if customer["uc_months_at_start"] > 24:
        score -= 0.12
    if customer["disability_or_health"] == "true":
        score -= 0.10
    score += random.uniform(-0.30, 0.45)
    if score > 0.10: return "ontrack"
    if score > -0.20: return "drifting"
    return "atrisk"


def derive_state(scenario, outcome, days_to_placement):
    """Deterministic mapping (scenario, outcome) -> journey_state + success_probability."""
    if outcome == "Sustained 6mo+":
        return "Success", round(random.uniform(95, 99), 1)
    if outcome.startswith("Placed - in progress"):
        return "Progressing", round(random.uniform(70, 92), 1)
    if outcome == "Placed - dropped":
        return "Failure", round(random.uniform(15, 35), 1)
    if outcome == "Withdrawn":
        return "Failure", round(random.uniform(5, 18), 1)
    if outcome == "Sanctioned referral":
        return "Failure", round(random.uniform(2, 12), 1)
    # Ongoing: pick by scenario
    if scenario == "ontrack":
        return "Progressing", round(random.uniform(72, 90), 1)
    if scenario == "drifting":
        # Some drifting are paused, some stalled
        return random.choice(["Paused","Stalled","Regressing"]), round(random.uniform(35, 60), 1)
    # atrisk
    return random.choice(["Stalled","Regressing","Paused"]), round(random.uniform(12, 38), 1)


def journey_for(customer, scenario):
    sms, push, plan, cv, vacs, sess, open_b = compute_signals(customer, scenario)
    # Final outcome by scenario
    if scenario == "ontrack":
        days_to_placement = int(random.triangular(28, 70, 42))
        outcome = random.choices(["Sustained 6mo+", "Placed - in progress", "Placed - dropped"], weights=[0.55, 0.40, 0.05])[0]
        sustainability = int(random.triangular(70, 96, 86))
    elif scenario == "drifting":
        days_to_placement = int(random.triangular(50, 130, 88))
        outcome = random.choices(["Sustained 6mo+", "Placed - in progress", "Placed - dropped", "Ongoing"], weights=[0.30, 0.30, 0.20, 0.20])[0]
        sustainability = int(random.triangular(45, 80, 65))
    else:
        days_to_placement = int(random.triangular(60, 240, 165))
        outcome = random.choices(["Placed - in progress", "Placed - dropped", "Withdrawn", "Sanctioned referral", "Ongoing"], weights=[0.18, 0.22, 0.18, 0.07, 0.35])[0]
        sustainability = int(random.triangular(15, 60, 38))

    referred = date.fromisoformat(customer["referred_date"])
    placed_at = referred + timedelta(days=days_to_placement) if outcome != "Ongoing" else None
    state, success_prob = derive_state(scenario, outcome, days_to_placement)
    # Current stage now correlated with state so the journey looks coherent
    if state == "Success":
        current_stage = "insupport"
    elif state == "Progressing":
        current_stage = random.choice(["jobmatch","interview","offer","nudgeFirstDay"])
    elif state == "Paused":
        current_stage = random.choice(["actionplan","skills"])
    elif state == "Stalled":
        current_stage = random.choice(["diagnostic","actionplan","skills"])
    elif state == "Regressing":
        current_stage = random.choice(["routerCheck","skills","jobmatch"])
    else:  # Failure
        current_stage = random.choice(["referral","diagnostic","actionplan","skills","jobmatch"])

    j = {
        "journey_id": "JNY-" + customer["customer_id"].split("-")[1],
        "customer_id": customer["customer_id"],
        "adviser_id": customer["adviser_id"],
        "region_key": customer["region_key"],
        "started_date": referred.isoformat(),
        "current_stage": current_stage,
        "journey_state": state,
        "success_probability": success_prob,
        "scenario_band": scenario,
        "outcome": outcome,
        "days_to_placement": days_to_placement if placed_at else 0,
        "placed_date": placed_at.isoformat() if placed_at else "1970-01-01",
        "sustainability_pct": sustainability,
        "sms_reply_pct": round(sms,1),
        "push_open_pct": round(push,1),
        "plan_completion_3": plan,
        "cv_progress_pct": round(cv,1),
        "vacancies_saved": vacs,
        "sessions_attended_3": sess,
        "open_barriers": open_b,
    }
    return j


def journey_stages(customer, journey):
    """Generate stage events. Skip late stages if outcome failed early."""
    rows = []
    referred = date.fromisoformat(journey["started_date"])
    fail_at_stage = None
    if journey["outcome"] == "Withdrawn":
        fail_at_stage = random.choice(["skills","jobmatch","interview"])
    elif journey["outcome"] == "Sanctioned referral":
        fail_at_stage = random.choice(["actionplan","skills"])
    elif journey["outcome"] == "Placed - dropped":
        fail_at_stage = "insupport"

    completed = True
    for stage_id, channel, day_offset in JOURNEY_STAGES:
        ts = referred + timedelta(days=day_offset + random.randint(-2, 4))
        no_show = False
        if fail_at_stage and stage_id == fail_at_stage:
            completed = False
            no_show = random.random() < 0.6
            rows.append({
                "stage_event_id": f"SEV-{journey['journey_id']}-{stage_id}",
                "customer_id": customer["customer_id"],
                "journey_id": journey["journey_id"],
                "adviser_id": customer["adviser_id"],
                "stage_key": stage_id,
                "channel": channel,
                "stage_date": ts.isoformat(),
                "completed": "false",
                "no_show": "true" if no_show else "false",
            })
            break
        if not completed:
            break
        rows.append({
            "stage_event_id": f"SEV-{journey['journey_id']}-{stage_id}",
            "customer_id": customer["customer_id"],
            "journey_id": journey["journey_id"],
            "adviser_id": customer["adviser_id"],
            "stage_key": stage_id,
            "channel": channel,
            "stage_date": ts.isoformat(),
            "completed": "true",
            "no_show": "false",
        })
    return rows


def router_score_rows(customer, journey):
    """One mid-journey row (always) + one end-of-journey row when journey completes."""
    rows = []
    referred = date.fromisoformat(journey["started_date"])
    # Mid score: weighted sum (same formula as in-app demo)
    j = journey
    # normalise
    sms_n = min(1.0, j["sms_reply_pct"]/100)
    push_n = min(1.0, j["push_open_pct"]/100)
    plan_n = j["plan_completion_3"]/3
    cv_n = j["cv_progress_pct"]/100
    vacs_n = min(1.0, j["vacancies_saved"]/6)
    sess_n = j["sessions_attended_3"]/3
    bar_n = max(0, 1 - j["open_barriers"]/4)
    score = round(100*(0.20*sms_n + 0.15*push_n + 0.15*plan_n + 0.15*cv_n + 0.10*vacs_n + 0.15*sess_n + 0.10*bar_n))
    band = "ON_TRACK" if score>=75 else "DRIFTING" if score>=50 else "AT_RISK"
    rows.append({
        "router_score_id": f"RTR-{journey['journey_id']}-mid",
        "journey_id": journey["journey_id"],
        "customer_id": customer["customer_id"],
        "adviser_id": customer["adviser_id"],
        "region_key": customer["region_key"],
        "check_type": "mid_journey",
        "score": score,
        "band": band,
        "action_taken": {"ON_TRACK":"light_touch","DRIFTING":"in_person_48h","AT_RISK":"call_today_mh_referral"}[band],
        "score_date": (referred + timedelta(days=30)).isoformat(),
    })
    if not j["outcome"].startswith(("Withdrawn","Sanctioned","Ongoing")):
        # End-of-journey training-update row, slightly higher than mid (intervention worked)
        bump = 18 if band=="AT_RISK" else 9 if band=="DRIFTING" else 4
        end_score = min(100, score + random.randint(bump-3, bump+5))
        end_band = "ON_TRACK" if end_score>=75 else "DRIFTING" if end_score>=50 else "AT_RISK"
        rows.append({
            "router_score_id": f"RTR-{journey['journey_id']}-end",
            "journey_id": journey["journey_id"],
            "customer_id": customer["customer_id"],
            "adviser_id": customer["adviser_id"],
            "region_key": customer["region_key"],
            "check_type": "end_of_journey",
            "score": end_score,
            "band": end_band,
            "action_taken": "training_update_applied",
            "score_date": (referred + timedelta(days=120)).isoformat(),
        })
    return rows


def write_csv(path, rows, fieldnames):
    with open(path, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)


def kpi_aggregates(journeys):
    """Aggregate KPIs by region x adviser x referral month — useful for dashboards."""
    buckets = {}
    for j in journeys:
        key = (j["region_key"], j["adviser_id"], j["started_date"][:7])
        b = buckets.setdefault(key, {"placements":0, "sustained":0, "withdrawn":0, "atrisk":0, "drifting":0, "ontrack":0, "total":0, "days_sum":0, "days_n":0, "sus_sum":0, "sus_n":0})
        b["total"] += 1
        if j["outcome"].startswith("Placed") or j["outcome"]=="Sustained 6mo+": b["placements"] += 1
        if j["outcome"]=="Sustained 6mo+": b["sustained"] += 1
        if j["outcome"]=="Withdrawn": b["withdrawn"] += 1
        b[j["scenario_band"]] = b.get(j["scenario_band"],0) + 1
        if j["days_to_placement"]:
            b["days_sum"] += j["days_to_placement"]; b["days_n"] += 1
        b["sus_sum"] += j["sustainability_pct"]; b["sus_n"] += 1
    rows = []
    for (region, adv, month), b in buckets.items():
        rows.append({
            "kpi_id": hashlib.md5(f"{region}{adv}{month}".encode()).hexdigest()[:12],
            "region_key": region,
            "adviser_id": adv,
            "month": month,
            "journeys": b["total"],
            "placements": b["placements"],
            "sustained": b["sustained"],
            "withdrawn": b["withdrawn"],
            "ontrack": b.get("ontrack",0),
            "drifting": b.get("drifting",0),
            "atrisk": b.get("atrisk",0),
            "avg_days_to_placement": round(b["days_sum"]/b["days_n"],1) if b["days_n"] else 0,
            "avg_sustainability_pct": round(b["sus_sum"]/b["sus_n"],1),
            "placement_rate_pct": round(100*b["placements"]/b["total"],1),
        })
    return rows


def main():
    print("[gen] advisers...")
    advisers = gen_advisers(247)
    write_csv(OUT/"advisers.csv", advisers, list(advisers[0].keys()))

    print("[gen] customers...")
    customers = [gen_customer(i, advisers) for i in range(1, 10287+1)]
    write_csv(OUT/"customers.csv", customers, list(customers[0].keys()))

    print("[gen] journeys + stages + router scores...")
    journeys = []
    stage_rows = []
    router_rows = []
    for c in customers:
        sc = scenario_for(c)
        j = journey_for(c, sc)
        journeys.append(j)
        stage_rows.extend(journey_stages(c, j))
        router_rows.extend(router_score_rows(c, j))
    write_csv(OUT/"journeys.csv", journeys, list(journeys[0].keys()))
    write_csv(OUT/"journey_stages.csv", stage_rows, list(stage_rows[0].keys()))
    write_csv(OUT/"router_scores.csv", router_rows, list(router_rows[0].keys()))

    print("[gen] kpi aggregates...")
    kpis = kpi_aggregates(journeys)
    write_csv(OUT/"outcomes_kpis.csv", kpis, list(kpis[0].keys()))

    counts = {p.name: sum(1 for _ in open(p)) - 1 for p in OUT.glob("*.csv")}
    print("[gen] DONE", counts)


if __name__ == "__main__":
    main()
