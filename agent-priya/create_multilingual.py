#!/usr/bin/env python3
"""Create one ElevenLabs ConvAI agent per supported language.

Reuses the same KB document and SIP REFER number as the original Priya agent.
Voice id is Mohi (EKTy9yXGjtpPEKGRXAro - friendly Indian-English F), the same
voice currently used by the English Priya agent. The eleven_turbo_v2 model
supports multilingual generation.

Each agent has:
  - same KB attached (Restart Scheme knowledge)
  - system prompt prefixed with explicit language instructions
  - first message in the target language
  - SIP REFER handoff to +14029732385

Output: agent-priya/agents-by-language.json (language code -> agent_id).
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
EXISTING_AGENT = json.loads((HERE / "agent.json").read_text())
KB_DOC_ID = EXISTING_AGENT["kb_doc_id"]
KB_DOC_NAME = EXISTING_AGENT["kb_doc_name"]
VOICE_ID = "EKTy9yXGjtpPEKGRXAro"  # Mohi - upbeat Indian-English F
HANDOFF_NUMBER = "+14029732385"
OUT_FILE = HERE / "agents-by-language.json"

# (lang_code, label, first_message_in_language, language_instruction)
LANGUAGES = [
    ("en",  "English",   "Hi, this is Priya from Maximus Restart. How can I help you today?",
        "Respond in English. UK spelling. Use UK idioms."),
    ("pl",  "Polish",    "Witam, tu Priya z Maximus Restart. W czym mogę pomóc?",
        "Respond exclusively in Polish (Polski). Use natural conversational Polish. Translate Restart terminology naturally."),
    ("so",  "Somali",    "Salaan, waxaan ahay Priya oo ka socota Maximus Restart. Sideen kuu caawin karaa?",
        "Respond exclusively in Somali (af-Soomaali). Use natural conversational Somali. Translate Restart terminology to Somali."),
    ("cy",  "Welsh",     "Helo, Priya o Maximus Restart sydd yma. Sut alla i helpu heddiw?",
        "Respond exclusively in Welsh (Cymraeg). Use natural conversational Welsh."),
    ("bn",  "Bengali",   "নমস্কার, আমি Maximus Restart থেকে প্রিয়া। আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
        "Respond exclusively in Bengali (বাংলা). Use natural conversational Bengali."),
    ("ur",  "Urdu",      "السلام علیکم، میں Maximus Restart سے پریا ہوں۔ میں آپ کی کیسے مدد کر سکتی ہوں؟",
        "Respond exclusively in Urdu (اردو). Use natural conversational Urdu."),
    ("ar",  "Arabic",    "مرحبًا، أنا بريا من Maximus Restart. كيف يمكنني مساعدتك اليوم؟",
        "Respond exclusively in Modern Standard Arabic (العربية). Use natural conversational Arabic."),
    ("ti",  "Tigrinya",  "ሰላም፡ ኣነ ፕሪያ ካብ Maximus Restart እየ። ብኸመይ ክሕግዘካ እኽእል?",
        "Respond exclusively in Tigrinya (ትግርኛ). Use natural conversational Tigrinya."),
    ("yo",  "Yoruba",    "Pẹlẹ o, Priya ni mí láti Maximus Restart. Báwo ni mo ṣe lè ràn yín lọ́wọ́?",
        "Respond exclusively in Yoruba (Yorùbá). Use natural conversational Yoruba."),
    ("pa",  "Punjabi",   "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ Maximus Restart ਤੋਂ ਪ੍ਰਿਯਾ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੀ ਹਾਂ?",
        "Respond exclusively in Punjabi (ਪੰਜਾਬੀ). Use natural conversational Punjabi."),
    ("ro",  "Romanian",  "Bună, sunt Priya de la Maximus Restart. Cu ce vă pot ajuta astăzi?",
        "Respond exclusively in Romanian (Română). Use natural conversational Romanian."),
    ("fr",  "French",    "Bonjour, je suis Priya de Maximus Restart. Comment puis-je vous aider aujourd'hui ?",
        "Respond exclusively in French (Français). Use natural conversational French."),
    ("de",  "German",    "Hallo, ich bin Priya von Maximus Restart. Wie kann ich Ihnen heute helfen?",
        "Respond exclusively in German (Deutsch). Use natural conversational German."),
    ("es",  "Spanish",   "Hola, soy Priya de Maximus Restart. ¿En qué puedo ayudarle hoy?",
        "Respond exclusively in Spanish (Español). Use natural conversational Spanish."),
]

BASE_PROMPT_BODY = """You are Priya Sharma, a senior Restart Scheme employment adviser at Maximus People Services in the UK. You support long-term Universal Credit claimants who have been referred to you by their Jobcentre Work Coach.

Voice and manner:
- Warm, plain language. Short sentences, like spoken conversation. 1 to 3 sentences per turn. Never lecture.
- Use the customer's name if you know it. Confirm what you heard before solving.
- Never use em dashes. Never sound like a chatbot. Never say "as an AI".

You can help with:
- Booking, moving, or cancelling adviser appointments (in-person, video, phone).
- CV help, interview prep, training, local job matches, sector tickets (forklift, CSCS, etc).
- Travel cost vouchers for appointments, training, interviews.
- Universal Credit "Better Off In Work" calculations before they accept an offer.
- Barriers to work: childcare, transport, health, confidence, digital skills, criminal record disclosure.
- In-work support for up to 6 months after a new role.

You cannot:
- Make benefits decisions (refer to Jobcentre / DWP).
- Give legal or immigration advice (refer to Citizens Advice).
- Give medical advice (refer to GP, NHS 111, or the Access to Work Mental Health Support Service).

Knowledge base: a comprehensive Restart KB is attached. Use it for any specific factual question.

Tools:
- transfer_to_number: use when the customer asks for a live human, or when there is any safeguarding concern (self-harm, suicide ideation, immediate danger, abuse). Say warmly "Of course, let me put you through to my live adviser team now. Please stay on the line." then trigger the tool.
- end_call: only when the customer has said goodbye and the conversation is naturally complete.

Safeguarding: if the customer mentions self-harm, suicide, immediate danger, or abuse:
1. Acknowledge gently, e.g. "I'm really glad you told me. The Samaritans are free, 24/7, on 116 123. If you are in immediate danger right now, please call 999."
2. Trigger transfer_to_number so a human takes over.

Goal: the customer should hang up feeling heard, with one concrete next step.
"""


SYSTEM_TOOLS = [
    {
        "type": "system",
        "name": "transfer_to_number",
        "description": "Hand the call off to a live human Restart adviser via SIP REFER. Use when the customer insists on a human, when there is a safeguarding concern, or when they are in crisis.",
        "params": {
            "system_tool_type": "transfer_to_number",
            "transfers": [{
                "phone_number": HANDOFF_NUMBER,
                "condition": "The customer wants to speak with a live human, has disclosed a safeguarding concern, or is in crisis."
            }]
        }
    },
    {
        "type": "system",
        "name": "end_call",
        "description": "End the call after the customer has said goodbye.",
        "params": {"system_tool_type": "end_call"}
    },
]


def find_existing(name):
    r = requests.get(f"{API}/convai/agents?page_size=100", headers=H, timeout=30)
    r.raise_for_status()
    for a in r.json().get("agents", []):
        if a.get("name") == name:
            return a.get("agent_id") or a.get("id")
    return None


def create_agent(lang_code, label, first_msg, lang_instruction):
    name = f"Priya - Maximus Restart Adviser ({label})"
    existing = find_existing(name)
    if existing:
        print(f"[lang] {label} -> reusing {existing}")
        return existing
    system_prompt = lang_instruction + "\n\n" + BASE_PROMPT_BODY
    body = {
        "name": name,
        "conversation_config": {
            "agent": {
                "first_message": first_msg,
                "language": lang_code,
                "prompt": {
                    "prompt": system_prompt,
                    "llm": "gemini-2.0-flash-001",
                    "temperature": 0.4,
                    "max_tokens": 700,
                    "knowledge_base": [
                        {"type": "file", "id": KB_DOC_ID, "name": KB_DOC_NAME, "usage_mode": "auto"}
                    ],
                    "tools": SYSTEM_TOOLS,
                }
            },
            "tts": {
                "model_id": "eleven_turbo_v2_5",
                "voice_id": VOICE_ID,
                "stability": 0.55,
                "similarity_boost": 0.8,
                "style": 0.25
            },
            "asr": {"user_input_audio_format": "pcm_16000"}
        },
        "platform_settings": {
            "widget": {"variant": "full", "text_input_enabled": True}
        }
    }
    r = requests.post(f"{API}/convai/agents/create", headers=JH, json=body, timeout=60)
    if r.status_code >= 400:
        print(f"[lang] {label} CREATE FAILED ({r.status_code}): {r.text[:300]}")
        return None
    aid = r.json().get("agent_id") or r.json().get("id")
    print(f"[lang] {label} -> created {aid}")
    return aid


def main():
    out = {"voice_id": VOICE_ID, "transfer_number": HANDOFF_NUMBER, "agents": {}}
    for code, label, first_msg, instruction in LANGUAGES:
        aid = create_agent(code, label, first_msg, instruction)
        if aid:
            out["agents"][code] = {"agent_id": aid, "label": label, "first_message_preview": first_msg[:80]}
    OUT_FILE.write_text(json.dumps(out, indent=2))
    print(f"\nwrote {OUT_FILE}")
    for code, meta in out["agents"].items():
        print(f"  {code:3s} {meta['label']:12s} {meta['agent_id']}")


if __name__ == "__main__":
    main()
