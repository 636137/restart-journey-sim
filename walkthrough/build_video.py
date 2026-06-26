#!/usr/bin/env python3
"""Mux narration onto the recorded video using REAL cue offsets captured
during recording (cues.json). Each clip is delayed to its measured start."""
import json, subprocess, pathlib, glob

BASE = pathlib.Path(__file__).parent
AUDIO = BASE / "audio"
cues = json.loads((BASE / "cues.json").read_text())["cues"]

video = sorted(glob.glob(str(BASE / "video" / "*.webm")))[-1]
vdur = float(subprocess.check_output(
    ["ffprobe","-v","error","-show_entries","format=duration",
     "-of","default=noprint_wrappers=1:nokey=1", video]).decode().strip())
print(f"video: {video}  dur={vdur:.2f}s  cues={len(cues)}")

# Anchor: cue offsets were measured from just before page.goto, which is
# essentially when video frames begin. No scaling needed; clamp to video len.
inputs = ["-i", video]
for c in cues:
    inputs += ["-i", str(AUDIO / f"{c['id']}.mp3")]

filters, labels = [], []
for idx, c in enumerate(cues):
    ms = max(0, int(c["offset"] * 1000))
    filters.append(f"[{idx+1}:a]adelay={ms}|{ms}[a{idx}]")
    labels.append(f"[a{idx}]")
mix = "".join(labels) + f"amix=inputs={len(cues)}:normalize=0:dropout_transition=0[aout]"
filter_complex = ";".join(filters + [mix])

out = str(BASE / "restart-walkthrough.mp4")
cmd = [
    "ffmpeg", "-y", *inputs,
    "-filter_complex", filter_complex,
    "-map", "0:v", "-map", "[aout]",
    "-vf", "scale=1180:-2",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "21", "-preset", "veryfast",
    "-c:a", "aac", "-b:a", "192k",
    "-movflags", "+faststart",
    "-t", f"{vdur:.3f}",
    out,
]
print("running ffmpeg…")
subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("WROTE", out)
