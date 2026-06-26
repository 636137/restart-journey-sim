#!/usr/bin/env python3
"""Emit bi/data/scenarios.csv from personas.json plus 3 baseline what-if scenarios.

Two tables actually:
  - personas.csv  one row per persona (6 rows)
  - scenarios.csv  baseline + what-ifs (3 rows; each row a network-wide multiplier set)
"""
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
DATA.mkdir(parents=True, exist_ok=True)

with (DATA / "personas.json").open() as f:
    personas = json.load(f)["personas"]

# personas.csv (flat)
fields = [
    "persona_id","name","age","sex","postcode","region","archetype","summary",
    "prior_sector","uc_months_at_start","barriers","barriers_count",
    "disability_or_health","digital_skills","preferred_language","adviser",
    "scenario_band","days_to_placement","final_outcome","sustainability_pct",
    "journey_state","success_probability","max_navigator_mid","max_navigator_end",
    "headline_moment","stages_count","stages_progression"
]
with (DATA / "personas.csv").open("w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=fields)
    w.writeheader()
    for p in personas:
        row = {
            "persona_id": p["id"],
            "name": p["name"],
            "age": p["age"],
            "sex": p["sex"],
            "postcode": p["postcode"],
            "region": p["region"],
            "archetype": p["archetype"],
            "summary": p["summary"],
            "prior_sector": p["prior_sector"],
            "uc_months_at_start": p["uc_months_at_start"],
            "barriers": ";".join(p["barriers"]),
            "barriers_count": p["barriers_count"],
            "disability_or_health": "true" if p["disability_or_health"] else "false",
            "digital_skills": p["digital_skills"],
            "preferred_language": p["preferred_language"],
            "adviser": p["adviser"],
            "scenario_band": p["scenario_band"],
            "days_to_placement": p["days_to_placement"],
            "final_outcome": p["final_outcome"],
            "sustainability_pct": p["sustainability_pct"],
            "journey_state": p["journey_state"],
            "success_probability": p["success_probability"],
            "max_navigator_mid": p["max_navigator_mid"],
            "max_navigator_end": p["max_navigator_end"] if p["max_navigator_end"] is not None else 0,
            "headline_moment": p["headline_moment"],
            "stages_count": len(p["stages_progression"]),
            "stages_progression": ";".join(p["stages_progression"]),
        }
        w.writerow(row)
print(f"wrote personas.csv with {len(personas)} rows")

# Baseline + what-if network multipliers for the dashboards
scenarios = [
    {
        "scenario_id": "baseline",
        "name": "Baseline · current state",
        "description": "Today's network. Used by all dashboards by default.",
        "placement_rate_mult": 1.00,
        "days_to_placement_mult": 1.00,
        "sustainability_mult": 1.00,
        "atrisk_share_mult": 1.00,
        "atrisk_share_pp": 0,
        "color": "#5B2D8E",
    },
    {
        "scenario_id": "hiring_boom",
        "name": "Hiring boom · 2030 UK labour market tightens",
        "description": "Vacancy:applicant ratio rises 25%, advisers refer faster, placement rate up, drop-out down.",
        "placement_rate_mult": 1.18,
        "days_to_placement_mult": 0.78,
        "sustainability_mult": 1.06,
        "atrisk_share_mult": 0.72,
        "atrisk_share_pp": -8,
        "color": "#00A39A",
    },
    {
        "scenario_id": "recession",
        "name": "Recession · 2027 hiring freeze in logistics & retail",
        "description": "Vacancies in restart's strongest sectors thin out, days-to-placement rises 35%, at-risk share grows.",
        "placement_rate_mult": 0.78,
        "days_to_placement_mult": 1.35,
        "sustainability_mult": 0.88,
        "atrisk_share_mult": 1.45,
        "atrisk_share_pp": 11,
        "color": "#FF453A",
    },
]
fields2 = list(scenarios[0].keys())
with (DATA / "scenarios.csv").open("w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=fields2)
    w.writeheader()
    for s in scenarios:
        w.writerow(s)
print(f"wrote scenarios.csv with {len(scenarios)} rows")
