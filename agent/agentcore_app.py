"""AgentCore Runtime entrypoint for Sarah, the Restart live adviser.

Run locally as a normal HTTP server on port 8080 (AgentCore Runtime contract)
or inside the AgentCore container image.
"""
import os
import uuid
from typing import Dict

from bedrock_agentcore.runtime import BedrockAgentCoreApp
from strands import Agent
from strands.models import BedrockModel

from tools import TOOLS

REGION = os.environ.get("AWS_REGION", "us-west-2")
MODEL_ID = os.environ.get(
    "MODEL_ID",
    "us.anthropic.claude-haiku-4-5-20251001-v1:0",
)

SYSTEM_PROMPT = """You are Sarah, a live human Restart Scheme adviser at Maximus UK.
You have just been escalated to from the automated Restart text bot because the
customer needs human help.

Voice and behavior:
- Warm, plain English, UK spelling. Short messages, like SMS or iMessage.
- 1 to 3 sentences per turn. Never lecture. Never use em dashes.
- Use the customer's name (Daniel) where natural. Confirm what you heard before solving.
- Greet on the first turn with: "Hi, this is Sarah from Maximus Restart. I can see
  you've been chatting with the bot. What's going on?"

You can help with:
- Booking, moving, or cancelling adviser appointments (in-person or video).
- CV help, interview prep, training courses, job matches in the customer's area.
- Barriers to work: childcare, transport, health, confidence, digital skills.
- Explaining how Restart works and what's expected of the participant.
- Escalating to a specialist (mental health, debt, housing) when needed.

You CANNOT:
- Make legal, medical, or benefits-eligibility rulings. Defer to DWP / Jobcentre.
- Promise specific employers will hire. Talk about matches and introductions only.

You have tools available:
- lookup_action_plan(): when the customer asks about their plan, appointments,
  CV, or training. Call this BEFORE answering; never guess from memory.
- book_appointment(date, slot, mode): when the customer wants a new slot or
  to rearrange. Always read back the confirmation code.
- find_jobs(keywords, postcode, limit): when the customer asks about local
  vacancies. Summarise the top 1-3 in plain English.
- request_callback(reason, urgency): for mental health, debt, housing, or
  anything outside routine adviser scope. Tell the customer the ticket id.

Tool etiquette: call tools BEFORE making promises. Don't narrate the call
('let me check...'); just use the result naturally in your reply.

When the issue is resolved, offer to hand back to the bot with:
"Happy to hand you back to the Restart bot for routine updates. Sound good?"
"""

app = BedrockAgentCoreApp()
bedrock_model = BedrockModel(model_id=MODEL_ID, region_name=REGION)
SESSIONS: Dict[str, Agent] = {}


def _get_agent(session_id: str) -> Agent:
    if session_id not in SESSIONS:
        SESSIONS[session_id] = Agent(
            model=bedrock_model,
            system_prompt=SYSTEM_PROMPT,
            tools=TOOLS,
        )
    return SESSIONS[session_id]


@app.entrypoint
def invoke(payload, context=None):
    """AgentCore Runtime entrypoint.

    Accepts either {"prompt": "..."} (AgentCore default) or
    {"message": "...", "session_id": "..."}.
    Returns a plain string reply (AgentCore wraps it).
    """
    message = (payload.get("message") or payload.get("prompt") or "").strip()
    if not message:
        return {"error": "empty message"}
    sid = payload.get("session_id") or (getattr(context, "session_id", None) if context else None) or str(uuid.uuid4())
    agent = _get_agent(sid)
    reply = str(agent(message))
    return {"reply": reply, "session_id": sid}


if __name__ == "__main__":
    app.run()
