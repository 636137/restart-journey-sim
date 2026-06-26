"""Tiny JSON-file state store for the demo. Replaces a real DB."""
import json
import os
import threading
from pathlib import Path

_LOCK = threading.Lock()
_PATH = Path(os.environ.get("RESTART_STATE_PATH", "/tmp/restart-state.json"))

_DEFAULT = {
    "customer": {
        "name": "Daniel Okafor",
        "postcode": "E20 1EJ",
        "phone": "+44 7700 900111",
        "adviser": "Priya Sharma",
    },
    "action_plan": {
        "goal": "Back into steady work in warehouse / logistics within 8 weeks",
        "this_week": [
            "Finish CV in the Restart app",
            "Confirm place on funded Warehouse Operations Level 2",
            "Save 3 local vacancies",
        ],
        "cv_status": "Drafted by Priya, awaiting Daniel's review",
        "training": "Warehouse Operations Level 2 — funded, 3 weeks, Stratford — 2 places left",
    },
    "appointments": [
        {"when": "Thu 26 Jun 10:30", "where": "Maximus, 2 Stratford Pl, E20 1EJ", "with": "Priya Sharma", "status": "confirmed"}
    ],
    "callbacks": [],
}


def _load():
    if _PATH.exists():
        try:
            return json.loads(_PATH.read_text())
        except Exception:
            pass
    return json.loads(json.dumps(_DEFAULT))


def _save(state):
    _PATH.write_text(json.dumps(state, indent=2))


def read():
    with _LOCK:
        return _load()


def update(mutator):
    """mutator(state) modifies state in place; returns the new state."""
    with _LOCK:
        state = _load()
        mutator(state)
        _save(state)
        return state


def reset():
    with _LOCK:
        if _PATH.exists():
            _PATH.unlink()
