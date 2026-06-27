#!/usr/bin/env python3
"""Generate the background music track for the demo videos.

ElevenLabs Music API. Single ~5min instrumental, used (and trimmed) by
all three videos so the soundtrack is consistent.
"""
import json
import os
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent
SCRIPTS = HERE / "scripts.json"
OUT = HERE / "music.mp3"

API_KEY = os.environ.get("ELEVENLABS_API_KEY")
if not API_KEY:
    sys.exit("ELEVENLABS_API_KEY not set")

cfg = json.loads(SCRIPTS.read_text())["music"]
prompt = cfg["prompt"]
duration = cfg["duration_sec"]

# Music API max per call ~300s (5 min). Cap to 300.
duration = min(duration, 300)
print(f"[music] generating {duration}s instrumental ...")

body = {"prompt": prompt, "music_length_ms": int(duration * 1000)}
req = urllib.request.Request(
    "https://api.elevenlabs.io/v1/music/generate",
    data=json.dumps(body).encode(),
    headers={"xi-api-key": API_KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"},
    method="POST",
)
with urllib.request.urlopen(req, timeout=240) as r:
    OUT.write_bytes(r.read())

size_kb = OUT.stat().st_size // 1024
print(f"[music] wrote music.mp3 ({size_kb} KB)")
