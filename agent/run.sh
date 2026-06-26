#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

VENV="$HOME/.venvs/restart-adviser"
if [ ! -d "$VENV" ]; then
  python3 -m venv "$VENV"
fi
source "$VENV/bin/activate"
pip install -q --upgrade pip
pip install -q -r requirements.txt

export AWS_REGION="us-west-2"
export MODEL_ID="${MODEL_ID:-us.anthropic.claude-haiku-4-5-20251001-v1:0}"
exec uvicorn server:app --host 127.0.0.1 --port 8000
