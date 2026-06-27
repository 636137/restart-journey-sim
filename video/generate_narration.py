#!/usr/bin/env python3
"""Generate per-scene narration MP3s + a stitched full narration WAV.

For each of the three videos (sizzle, exec, full):
  - TTS each scene line with the Chad voice + UK accent prompt
  - Probe duration
  - Stitch with 350ms gaps -> video/<video_id>/narration.mp3
  - Update timeline.json with start/end ms per scene

Use ffmpeg/ffprobe.
"""
import json
import os
import subprocess
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent
SCRIPTS = HERE / "scripts.json"
API_KEY = os.environ.get("ELEVENLABS_API_KEY")
if not API_KEY:
    sys.exit("ELEVENLABS_API_KEY not set")

cfg = json.loads(SCRIPTS.read_text())
VOICE_ID = cfg["voice"]["voice_id"]
MODEL_ID = cfg["voice"]["model_id"]
LANGUAGE_CODE = cfg["voice"]["language_code"]
VOICE_SETTINGS = cfg["voice"]["voice_settings"]
GAP_MS = 350


def tts(text, out_path):
    body = {
        "text": text,
        "model_id": MODEL_ID,
        "language_code": LANGUAGE_CODE,
        "voice_settings": VOICE_SETTINGS,
    }
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}",
        data=json.dumps(body).encode(),
        headers={"xi-api-key": API_KEY, "Content-Type": "application/json", "Accept": "audio/mpeg"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as r:
        out_path.write_bytes(r.read())


def probe_ms(path):
    out = subprocess.check_output([
        "ffprobe","-v","error","-show_entries","format=duration",
        "-of","default=noprint_wrappers=1:nokey=1", str(path)
    ]).decode().strip()
    return int(float(out)*1000)


def stitch(paths, out_path, gap_ms=GAP_MS):
    inputs = []
    for p in paths:
        inputs += ["-i", str(p)]
    inputs += ["-f","lavfi","-t",f"{gap_ms/1000:.3f}","-i","anullsrc=r=44100:cl=mono"]
    silence_idx = len(paths)
    parts = []
    for i in range(len(paths)):
        parts.append(f"[{i}:a]")
        if i < len(paths)-1:
            parts.append(f"[{silence_idx}:a]")
    f = "".join(parts) + f"concat=n={2*len(paths)-1}:v=0:a=1[out]"
    cmd = ["ffmpeg","-y","-hide_banner","-loglevel","error"] + inputs + [
        "-filter_complex", f, "-map","[out]","-c:a","libmp3lame","-b:a","160k", str(out_path)
    ]
    subprocess.check_call(cmd)


def main():
    for video_id, vid in cfg["videos"].items():
        out_dir = HERE / video_id
        out_dir.mkdir(parents=True, exist_ok=True)
        line_paths = []
        timeline = []
        cumulative_ms = 0
        print(f"\n=== {video_id} :: {vid['label']} ===")
        for s in vid["scenes"]:
            path = out_dir / f"scene_{s['id']}.mp3"
            if path.exists() and path.stat().st_size > 1000:
                print(f"  [skip] {path.name}")
            else:
                print(f"  [tts]  {path.name}")
                tts(s["narration"], path)
            dur = probe_ms(path)
            timeline.append({
                "id": s["id"],
                "text": s["narration"],
                "file": path.name,
                "duration_ms": dur,
                "start_ms": cumulative_ms,
                "end_ms": cumulative_ms + dur,
            })
            cumulative_ms += dur + GAP_MS
            line_paths.append(path)
        full = out_dir / "narration.mp3"
        stitch(line_paths, full)
        total = probe_ms(full)
        print(f"  [mix]  narration.mp3 {total/1000:.1f}s")
        (out_dir / "timeline.json").write_text(json.dumps({
            "video": video_id, "label": vid["label"],
            "total_ms": total, "gap_ms": GAP_MS,
            "scenes": timeline,
        }, indent=2))


if __name__ == "__main__":
    main()
