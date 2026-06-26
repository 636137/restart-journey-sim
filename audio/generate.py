#!/usr/bin/env python3
"""Generate per-line MP3s + a stitched MP3 + timing JSON for each scenario.

Uses ElevenLabs TTS. Reads scripts.json. Writes:
  audio/<scenario>/line_NN_<speaker>.mp3
  audio/<scenario>/full.mp3                 (concatenated with 350 ms gaps)
  audio/<scenario>/timeline.json            (cumulative ms offsets per line)

Requires ffmpeg + ELEVENLABS_API_KEY env.
"""
import json
import os
import subprocess
import sys
from pathlib import Path

import urllib.request

HERE = Path(__file__).parent
SCRIPTS = HERE / "scripts.json"
API_KEY = os.environ.get("ELEVENLABS_API_KEY")
if not API_KEY:
    sys.exit("ELEVENLABS_API_KEY not set")

cfg = json.loads(SCRIPTS.read_text())
VOICES = cfg["voices"]  # speaker_key -> voice_id
MODEL_ID = cfg["model_id"]
GAP_MS = 350


def voice_settings(role):
    # role is 'adviser' (warm, calm) or 'customer' (more naturalistic variance)
    if role == "adviser":
        return {"stability": 0.55, "similarity_boost": 0.8, "style": 0.25, "use_speaker_boost": True}
    return {"stability": 0.50, "similarity_boost": 0.75, "style": 0.30, "use_speaker_boost": True}


def tts(text, voice_id, role, out_path):
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
        data=json.dumps({
            "text": text,
            "model_id": MODEL_ID,
            "voice_settings": voice_settings(role),
        }).encode(),
        headers={
            "xi-api-key": API_KEY,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    out_path.write_bytes(data)
    return len(data)


def probe_duration_ms(path):
    out = subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", str(path)
    ]).decode().strip()
    return int(float(out) * 1000)


def stitch(line_paths, out_path):
    """Concatenate MP3s with 350 ms silence gaps using ffmpeg."""
    # Build a concat-friendly input via -filter_complex with inserted silence.
    inputs = []
    filters = []
    n = len(line_paths)
    for i, p in enumerate(line_paths):
        inputs += ["-i", str(p)]
    # Add a single silence input
    inputs += ["-f", "lavfi", "-t", f"{GAP_MS/1000:.3f}", "-i", "anullsrc=r=44100:cl=mono"]
    silence_idx = n
    parts = []
    for i in range(n):
        parts.append(f"[{i}:a]")
        if i < n - 1:
            parts.append(f"[{silence_idx}:a]")
    filter_str = "".join(parts) + f"concat=n={2*n-1}:v=0:a=1[out]"
    cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error"] + inputs + [
        "-filter_complex", filter_str, "-map", "[out]",
        "-c:a", "libmp3lame", "-b:a", "128k", str(out_path)
    ]
    subprocess.check_call(cmd)


def main():
    for scenario_key, scenario in cfg["scenarios"].items():
        out_dir = HERE / scenario_key
        out_dir.mkdir(parents=True, exist_ok=True)
        line_paths = []
        timeline = []
        cumulative_ms = 0
        customer_voice_key = scenario["voice_customer"]
        adviser_voice_key  = scenario["voice_adviser"]
        print(f"\n=== {scenario_key} :: {scenario['label']} ===")
        for i, line in enumerate(scenario["lines"], start=1):
            role = line["speaker"]  # 'adviser' or 'customer'
            voice_key = adviser_voice_key if role == "adviser" else customer_voice_key
            vid = VOICES[voice_key]
            path = out_dir / f"line_{i:02d}_{role}_{voice_key}.mp3"
            if path.exists() and path.stat().st_size > 1000:
                print(f"  [skip] {path.name}")
            else:
                size = tts(line["text"], vid, role, path)
                print(f"  [gen]  {path.name}  {size:,} bytes")
            dur = probe_duration_ms(path)
            timeline.append({
                "i": i,
                "speaker": role,
                "voice_key": voice_key,
                "text": line["text"],
                "file": path.name,
                "duration_ms": dur,
                "start_ms": cumulative_ms,
            })
            cumulative_ms += dur + GAP_MS
            line_paths.append(path)
        # Stitch
        full = out_dir / "full.mp3"
        stitch(line_paths, full)
        full_dur = probe_duration_ms(full)
        print(f"  [mix]  {full.name}  {full_dur/1000:.1f} s")
        (out_dir / "timeline.json").write_text(json.dumps({
            "scenario": scenario_key,
            "label": scenario["label"],
            "framing": scenario["framing"],
            "voice_customer": customer_voice_key,
            "voice_adviser": adviser_voice_key,
            "total_ms": full_dur,
            "gap_ms": GAP_MS,
            "lines": timeline,
        }, indent=2))


if __name__ == "__main__":
    main()
