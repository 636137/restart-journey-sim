"""Strands tools for Sarah, the live Restart adviser."""
import secrets
from datetime import datetime, timedelta

from strands import tool

from state import read, update

MOCK_JOBS = [
    {"title": "Warehouse Team Member", "company": "Sundown Logistics", "area": "Stratford E15", "salary": "£25,400", "match": 92, "commute_min": 22},
    {"title": "Forklift Driver", "company": "Bow Distribution", "area": "Bow E3", "salary": "£28,000", "match": 88, "commute_min": 18},
    {"title": "Goods-In Operative", "company": "Olympic Park Logistics", "area": "Stratford E20", "salary": "£24,200", "match": 84, "commute_min": 8},
    {"title": "Delivery Driver (Van)", "company": "Newham Couriers", "area": "Plaistow E13", "salary": "£26,800", "match": 79, "commute_min": 25},
    {"title": "Picker/Packer", "company": "Riverside Foods", "area": "Beckton E6", "salary": "£23,500", "match": 76, "commute_min": 28},
]


@tool
def lookup_action_plan() -> dict:
    """Look up Daniel's current Restart action plan: goal, weekly goals, CV
    status, training, and any open appointments. Call this whenever the
    customer asks 'what am I supposed to be doing' or 'what's my plan'."""
    s = read()
    return {
        "customer": s["customer"],
        "goal": s["action_plan"]["goal"],
        "this_week": s["action_plan"]["this_week"],
        "cv_status": s["action_plan"]["cv_status"],
        "training": s["action_plan"]["training"],
        "appointments": s["appointments"],
    }


@tool
def book_appointment(date: str, slot: str, mode: str = "in-person") -> dict:
    """Book a new appointment with Daniel's adviser.

    Args:
        date: human-readable date, e.g. 'Fri 27 Jun 2026' or 'next Tuesday'.
        slot: time of day, e.g. '11:00' or '2:30pm'.
        mode: 'in-person' (default) or 'video'.
    Returns confirmation including a short confirmation code.
    """
    code = "RS-" + secrets.token_hex(3).upper()
    booking = {
        "when": f"{date} {slot}",
        "where": "Video call (Restart app)" if mode == "video" else "Maximus, 2 Stratford Pl, E20 1EJ",
        "with": "Priya Sharma",
        "mode": mode,
        "status": "confirmed",
        "confirmation": code,
    }
    update(lambda s: s["appointments"].append(booking))
    return {"ok": True, "booking": booking, "message": f"Booked. Confirmation code {code}."}


@tool
def find_jobs(keywords: str = "", postcode: str = "E20", limit: int = 3) -> dict:
    """Search local vacancies for Daniel.

    Args:
        keywords: e.g. 'warehouse', 'forklift', 'driver'. Empty = any.
        postcode: outward part of postcode, default 'E20'.
        limit: max number of jobs to return (1-5).
    Returns a ranked list of matching local jobs.
    """
    kw = (keywords or "").lower().split()
    def score(j):
        if not kw:
            return j["match"]
        hay = (j["title"] + " " + j["company"] + " " + j["area"]).lower()
        bonus = sum(20 for k in kw if k in hay)
        return j["match"] + bonus
    ranked = sorted(MOCK_JOBS, key=score, reverse=True)
    return {"count": min(limit, len(ranked)), "jobs": ranked[: max(1, min(limit, 5))]}


@tool
def request_callback(reason: str, urgency: str = "normal") -> dict:
    """Schedule a callback from a human specialist when something is outside
    routine adviser scope.

    Args:
        reason: short reason, e.g. 'mental health support', 'debt advice',
            'housing emergency', 'childcare costs'.
        urgency: 'normal' (within 2 working days) or 'urgent' (same day).
    Returns the ticket id and the time the customer will be called.
    """
    ticket = "CB-" + secrets.token_hex(3).upper()
    when = datetime.utcnow() + (timedelta(hours=4) if urgency == "urgent" else timedelta(days=2))
    record = {
        "ticket": ticket,
        "reason": reason,
        "urgency": urgency,
        "scheduled_for_utc": when.strftime("%Y-%m-%d %H:%M"),
        "phone": read()["customer"]["phone"],
    }
    update(lambda s: s["callbacks"].append(record))
    return {"ok": True, "callback": record, "message": f"Booked {urgency} callback {ticket} for {record['scheduled_for_utc']} UTC."}


TOOLS = [lookup_action_plan, book_appointment, find_jobs, request_callback]
