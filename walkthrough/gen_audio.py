#!/usr/bin/env python3
"""Generate per-segment narration MP3s from ElevenLabs and record durations."""
import json, os, re, subprocess, sys, pathlib

BASE = pathlib.Path(__file__).parent
AUDIO = BASE / "audio"
AUDIO.mkdir(exist_ok=True)

# --- load key ---
key = os.environ.get("ELEVENLABS_API_KEY") or os.environ.get("ELEVEN_API_KEY")
if not key:
    txt = (pathlib.Path.home() / ".elevenlabs").read_text()
    m = re.search(r'sk_[A-Za-z0-9]+', txt)
    key = m.group(0) if m else None
assert key, "no ElevenLabs API key"

from elevenlabs import ElevenLabs
client = ElevenLabs(api_key=key)

spec = json.loads((BASE / "script.json").read_text())
vid = spec["voice_id"]; model = spec["model_id"]; vs = spec["voice_settings"]

def dur(path):
    out = subprocess.check_output(
        ["ffprobe","-v","error","-show_entries","format=duration",
         "-of","default=noprint_wrappers=1:nokey=1", str(path)]).decode().strip()
    return float(out)

manifest = []
for seg in spec["segments"]:
    fn = AUDIO / f'{seg["id"]}.mp3'
    print(f'… generating {seg["id"]}', flush=True)
    resp = client.text_to_speech.convert(
        voice_id=vid, text=seg["text"], model_id=model,
        output_format="mp3_44100_128",
        voice_settings=vs,
    )
    with open(fn, "wb") as f:
        for chunk in resp:
            f.write(chunk)
    d = dur(fn)
    manifest.append({"id": seg["id"], "file": fn.name, "dur": round(d,3), "text": seg["text"]})
    print(f'   {seg["id"]}: {d:.2f}s', flush=True)

(BASE / "manifest.json").write_text(json.dumps(manifest, indent=2))
total = sum(m["dur"] for m in manifest)
print(f"\nTOTAL narration: {total:.1f}s across {len(manifest)} segments")
