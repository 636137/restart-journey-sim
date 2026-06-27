#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# 1. Narration (TTS) and music (gen) — idempotent, skips if files exist
source ~/.elevenlabs

if [ ! -f sizzle/narration.mp3 ] || [ ! -f exec/narration.mp3 ] || [ ! -f full/narration.mp3 ]; then
  echo "==> generating narration"
  python3 generate_narration.py
fi

if [ ! -f music.mp3 ]; then
  echo "==> generating music"
  python3 generate_music.py
fi

# 2. Playwright
if [ ! -d node_modules ]; then
  echo "==> installing playwright"
  npm install --silent
  npx playwright install chromium --with-deps 2>/dev/null || npx playwright install chromium
fi

# 3. Record each video then compose
for vid in sizzle exec full; do
  if [ ! -f "$vid/screen.webm" ]; then
    echo "==> recording $vid"
    node record.js "$vid"
  fi
  echo "==> composing $vid"
  python3 compose.py "$vid"
done

echo
echo "DONE. Final files:"
ls -lh sizzle/restart-sizzle.mp4 exec/restart-exec.mp4 full/restart-full.mp4 2>/dev/null
