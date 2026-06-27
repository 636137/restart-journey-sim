#!/usr/bin/env python3
"""Compose final mp4 = screen.webm + narration.mp3 + music.mp3 (ducked).

Music volume: scripts.json music.volume_db (default -20 dB).
Narration sits on top at 0 dB.
"""
import json
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
SCRIPTS = json.loads((HERE/"scripts.json").read_text())
MUSIC = HERE/"music.mp3"
MUSIC_DB = SCRIPTS["music"].get("volume_db", -20)

if len(sys.argv) != 2:
    sys.exit("usage: compose.py {sizzle|exec|full}")
video_id = sys.argv[1]

out_dir = HERE / video_id
screen = out_dir / "screen.webm"
narration = out_dir / "narration.mp3"
final = out_dir / f"restart-{video_id}.mp4"

if not screen.exists():
    sys.exit(f"missing {screen}")
if not narration.exists():
    sys.exit(f"missing {narration}")
if not MUSIC.exists():
    sys.exit(f"missing {MUSIC}")

# Determine target length from narration.
def probe(path):
    out = subprocess.check_output([
        "ffprobe","-v","error","-show_entries","format=duration",
        "-of","default=noprint_wrappers=1:nokey=1", str(path)
    ]).decode().strip()
    return float(out)

narr_sec = probe(narration)
scrn_sec = probe(screen)
target_sec = max(narr_sec, scrn_sec) + 1.0
print(f"[compose] narration={narr_sec:.1f}s  screen={scrn_sec:.1f}s  target={target_sec:.1f}s")

# Filter graph:
#   - Loop / trim music to target, lower by MUSIC_DB
#   - Mix with narration
#   - Pad screen to target if shorter
filter_complex = (
    f"[1:a]volume={MUSIC_DB}dB,aloop=loop=-1:size=2e9,atrim=0:{target_sec},asetpts=N/SR/TB[mus];"
    f"[2:a][mus]amix=inputs=2:duration=longest:dropout_transition=2:weights=1.0 0.6[aout];"
    f"[0:v]tpad=stop_mode=clone:stop_duration={max(0, target_sec - scrn_sec):.2f}[vout]"
)

cmd = [
    "ffmpeg","-y","-hide_banner","-loglevel","warning",
    "-i", str(screen),     # 0 video
    "-i", str(MUSIC),      # 1 music
    "-i", str(narration),  # 2 narration
    "-filter_complex", filter_complex,
    "-map","[vout]","-map","[aout]",
    "-c:v","libx264","-pix_fmt","yuv420p","-crf","20","-preset","medium","-movflags","+faststart",
    "-c:a","aac","-b:a","192k","-ar","44100",
    "-t", f"{target_sec:.2f}",
    str(final),
]
print(f"[compose] running ffmpeg -> {final.name}")
subprocess.check_call(cmd)
print(f"[compose] wrote {final}")
