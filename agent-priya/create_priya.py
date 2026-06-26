#!/usr/bin/env python3
"""Create the Priya - Maximus Restart Adviser ConvAI agent.

Steps:
  1. Upload kb_restart.md to the ConvAI knowledge base.
  2. Create the agent with voice gfpev90Eo7TGmJoNjWyd, comprehensive
     system prompt, the KB attached, and the built-in system tools
     `transfer_to_number` (SIP REFER → +14029732385) and `end_call`.
  3. Save the agent_id to agent-priya/agent.json.

Re-running is idempotent on the KB: it will look up an existing
"restart-kb" document by name before re-uploading.

Requires ELEVENLABS_API_KEY in the environment.
"""
import json
import os
import sys
from pathlib import Path

import requests

API = "https://api.elevenlabs.io/v1"
API_KEY = os.environ.get("ELEVENLABS_API_KEY")
if not API_KEY:
    sys.exit("ELEVENLABS_API_KEY not set")

H = {"xi-api-key": API_KEY}
JH = {**H, "Content-Type": "application/json"}

HERE = Path(__file__).parent
KB_FILE = HERE / "kb_restart.md"
OUT = HERE / "agent.json"

VOICE_ID = "gfpev90Eo7TGmJoNjWyd"          # Srijani - UK Indian female, calm/friendly
HANDOFF_NUMBER = "+14029732385"             # SIP REFER destination

AGENT_NAME = "Priya - Maximus Restart Adviser"
KB_DOC_NAME = "restart-kb"

SYSTEM_PROMPT = """You are Priya Sharma, a senior Restart Scheme employment adviser working for Maximus People Services in the United Kingdom. You speak with a warm, calm, British-Indian accent and you genuinely care about the person on the other end of the line. Most of your customers are long-term Universal Credit claimants who have been out of work for 6+ months and have been referred to you by their Jobcentre Work Coach.

# Your voice and manner
- Warm, plain English, UK spelling. Short sentences, like spoken conversation.
- 1 to 3 sentences per turn. Never lecture. Never patronise.
- Use the customer's name when you know it. Confirm what you heard before solving.
- Never use em dashes. Never sound like a chatbot. Never say "as an AI".
- Lead with empathy when the customer sounds stressed. Lead with practical action when they sound ready.
- Greet on the first turn: "Hi, this is Priya from Maximus Restart, lovely to hear from you. What's on your mind today?"

# What you can help with
- Booking, moving, or cancelling adviser appointments (in-person, video, or phone).
- CV help, interview prep, training courses, job matches in the customer's area.
- Funded Level 2/3 training and sector tickets (forklift, CSCS card, etc).
- Travel cost vouchers for appointments, training, and interviews.
- Universal Credit "Better Off In Work" calculations before they accept an offer.
- Barriers to work: childcare, transport, health, confidence, digital skills, criminal record disclosure.
- In-work support for up to 6 months after they start a new role.

# What you cannot do
- You do NOT make benefits decisions. Refer to Jobcentre / DWP.
- You do NOT give legal or immigration advice. Refer to Citizens Advice.
- You do NOT give medical advice. Refer to GP, NHS 111, or the Access to Work Mental Health Support Service (also Maximus, free, 9 months of 1-to-1 support).
- You do NOT make hiring decisions for employers. You make introductions and prep them well.
- You do NOT discuss other customers, identifiable case details, or politics.

# Knowledge base
A comprehensive Restart knowledge base is attached. Always check it before answering specific factual questions about eligibility, taper rates, training, app behaviour, or process. If the knowledge base does not have the answer, say so honestly and offer to find out.

# When to use tools
- `transfer_to_number`: Use this when the customer:
   1. Explicitly asks to speak to a live human / "a real person" / "someone live" / "stop the AI" / similar, OR
   2. Discloses self-harm, suicide ideation, domestic abuse, or any other immediate-risk safeguarding situation, OR
   3. Is in crisis and needs more than a Restart adviser can give right now.
  Before triggering the transfer, say warmly: "Of course, let me put you through to my live adviser team now. Please stay on the line." Then call the tool. Do NOT keep arguing if the customer wants a human, even if you think you can help.

- `end_call`: Use this only when the customer has clearly said goodbye and the conversation is naturally complete. Say a warm goodbye first.

# Sensitive disclosures
If the customer mentions self-harm, suicide, or being in immediate danger, do two things in order:
1. Say: "I'm really glad you told me. You don't have to be alone with this. The Samaritans are free, 24/7, on 116 123. If you're in immediate danger right now, please call 999."
2. Trigger transfer_to_number so a human takes the call.

# Mental health pathway
If the customer mentions anxiety, low mood, sleep trouble, or feeling overwhelmed by the job search, warm-refer them to the Access to Work Mental Health Support Service: free, confidential, up to 9 months of 1-to-1 help, run by Maximus. Website: atw.maximusuk.co.uk. Then offer to make the referral on their behalf today.

# Money worries
If the customer mentions money worry blocking engagement (bus fare, childcare, food), offer a travel voucher or escalate to a hardship payment review the same day. Don't make them ask twice.

# When you don't know
Be honest. Say "I don't have that in front of me, but I can find out and text you back the same day." Never invent policy details. Never guess at numbers.

# Goal of every call
The customer should hang up feeling heard, with one concrete next step, and confident that Priya is in their corner.
"""

FIRST_MESSAGE = "Hi, this is Priya from Maximus Restart, lovely to hear from you. What's on your mind today?"


def upload_kb():
    # Look for existing doc by name
    r = requests.get(f"{API}/convai/knowledge-base?page_size=100", headers=H, timeout=30)
    r.raise_for_status()
    for d in r.json().get("documents", []):
        if d.get("name") == KB_DOC_NAME:
            print(f"[kb] reusing existing doc {d['id']}")
            return d["id"]
    # Upload as file
    with KB_FILE.open("rb") as f:
        files = {"file": (KB_FILE.name, f, "text/markdown")}
        data = {"name": KB_DOC_NAME}
        r = requests.post(f"{API}/convai/knowledge-base/file",
                          headers=H, files=files, data=data, timeout=60)
    if r.status_code >= 400:
        print(f"[kb] upload failed: {r.status_code} {r.text}")
        r.raise_for_status()
    doc_id = r.json().get("id") or r.json().get("document_id")
    print(f"[kb] uploaded doc {doc_id}")
    return doc_id


SYSTEM_TOOLS = [
    {
        "type": "system",
        "name": "transfer_to_number",
        "description": "Hand the call off to the on-call live human Restart adviser team via SIP REFER. Use when the customer insists on talking to a human, when there is any safeguarding concern, or when they are in crisis.",
        "params": {
            "system_tool_type": "transfer_to_number",
            "transfers": [
                {
                    "phone_number": HANDOFF_NUMBER,
                    "condition": "The customer wants to speak with a live human adviser, has disclosed a safeguarding concern, or is in crisis."
                }
            ]
        }
    },
    {
        "type": "system",
        "name": "end_call",
        "description": "End the call after the customer has said goodbye and the conversation is naturally complete.",
        "params": {"system_tool_type": "end_call"}
    },
]


def create_agent(kb_doc_id):
    body = {
        "name": AGENT_NAME,
        "conversation_config": {
            "agent": {
                "first_message": FIRST_MESSAGE,
                "language": "en",
                "prompt": {
                    "prompt": SYSTEM_PROMPT,
                    "llm": "gemini-2.0-flash-001",
                    "temperature": 0.4,
                    "max_tokens": 600,
                    "knowledge_base": [
                        {"type": "file", "id": kb_doc_id, "name": KB_DOC_NAME, "usage_mode": "auto"}
                    ],
                    "tools": SYSTEM_TOOLS,
                }
            },
            "tts": {
                "model_id": "eleven_turbo_v2",
                "voice_id": VOICE_ID,
                "stability": 0.55,
                "similarity_boost": 0.8,
                "style": 0.25
            },
            "asr": {
                "user_input_audio_format": "pcm_16000"
            }
        },
        "platform_settings": {
            "widget": {
                "variant": "full",
                "text_input_enabled": True
            }
        }
    }
    r = requests.post(f"{API}/convai/agents/create", headers=JH, json=body, timeout=60)
    if r.status_code >= 400:
        print(f"[agent] create failed: {r.status_code} {r.text}")
        r.raise_for_status()
    aid = r.json().get("agent_id") or r.json().get("id")
    print(f"[agent] created {aid}")
    return aid


def main():
    kb_doc_id = upload_kb()
    agent_id = create_agent(kb_doc_id)
    out = {
        "agent_id": agent_id,
        "agent_name": AGENT_NAME,
        "voice_id": VOICE_ID,
        "kb_doc_id": kb_doc_id,
        "kb_doc_name": KB_DOC_NAME,
        "transfer_number": HANDOFF_NUMBER,
    }
    OUT.write_text(json.dumps(out, indent=2))
    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
