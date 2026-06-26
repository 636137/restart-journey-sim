# Restart Journey Sim

An interactive iPhone walkthrough of the **Maximus UK Restart Scheme** customer journey, paired with a real **Amazon QuickSight Enterprise + Q** business-intelligence environment over 10,287 synthetic journeys.

> Demo only. Not affiliated with DWP or the real Maximus Restart programme.

What's in the box:

- A pixel-faithful iPhone sim that plays one of six realistic customer journeys end-to-end across SMS, push, email, in-app cards, a Matrix-style routing animation, a deterministic mid-journey "Max Navigator" check, a same-day welfare call with two-way ElevenLabs voice, and an end-of-journey training update.
- A live AI adviser called **Sarah** on **Amazon Bedrock AgentCore Runtime** using the **Strands Agents SDK** and four real tools (book appointment, lookup action plan, find local jobs, request callback).
- A live voice agent called **Priya** on **ElevenLabs ConvAI** with the same UK Indian voice as the scripted scenario audio, a comprehensive Restart-adviser knowledge base, and a SIP REFER tool that hands off to a real phone number when the customer insists on a human.
- A QuickSight Enterprise + Q account with **five executive-grade dashboards** (Executive Overview, Adviser Performance, Customer Outcomes, Journey Progress, Realistic Scenarios), a Q topic for natural-language Q&A, and the new Quick Suite **Scenarios** generative-BI feature wired up.

Live demo URLs are printed by the two deploy scripts.

---

## What the iPhone sim shows

After signing in (Cognito-gated, credentials not exposed), the demo:

1. Asks the operator to pick one of **six realistic customer personas** (Daniel · long-term UC, Amara · returner after caring break, Wojciech · Polish-speaking older construction worker, Tomasz · mental-health-led drift, Fadumo · refugee with Somali translator, Mark · ex-offender + HGV path).
2. Runs a **Matrix-style routing animation** that decodes the customer's top five attributes against the Maximus adviser pool and locks onto Priya Sharma at 98% compatibility.
3. Walks the picked customer through a **14-stage journey**:

| # | Stage | Channel | What happens |
|---|-------|---------|--------------|
| 1 | Welcome and first contact | SMS | DWP referral; warm welcome; cross-links to Adult Skills Fund + Access to Work; free real-time speech-to-speech translation invitation |
| 2 | **Max Navigator · in-person visit required** | System overlay | Program-policy mandatory diagnostic visit; translation offer prominent |
| 3 | Diagnostic appointment booked | SMS | First face-to-face confirmed with Priya |
| 4 | Nudge: night before first meeting | Push | Checklist: ID, NI number, travel, mindset |
| 5 | Your action plan | Email | Personalised plan with weekly goals |
| 6 | CV and skills support | Push | CV ready to review + funded Level 2 course |
| 7 | **Max Navigator · mid-journey algorithmic check** | System overlay | Deterministic 7-signal scorecard; ON-TRACK / DRIFTING / AT-RISK band → action |
| 8 | **Max Navigator · escalation in-person** | System overlay | Fires only when band is DRIFTING or AT-RISK |
| 9 | **Voiced scenario call** | ElevenLabs audio | One of three scripted Priya↔customer calls plays per scenario, with bubble captions in sync |
| 10 | Job match | Push | 92% match: Warehouse Team Member at Sundown Logistics |
| 11 | Interview and prep | SMS | Interview scheduled, travel costs covered |
| 12 | Nudges (night before + morning of) | Push | Sleep, outfit, route, mindset, 4-7-8 breath |
| 13 | Job offer | Email | Offer details, UC taper plain-English, cross-links to Access to Work + Adult Skills Fund |
| 14 | In-work support + **Training update** | Push + system overlay | Six months of weekly check-ins; the end-of-journey overlay shows raw numbers, cohort percentiles, and a green-screen node-graph of customer-expert-journey embeddings |

### Three escalation surfaces for Sarah (text)

All backed by the same AgentCore Strands agent:

- "Talk to a live adviser" chip in the SMS thread
- Live Chat home-screen app (iMessage-style blue thread)
- Push notification handoff ("Sarah is ready")

Sarah's four Strands tools:

| Tool | What it does |
|------|--------------|
| `lookup_action_plan()` | Returns the current goal, weekly tasks, CV status, training, appointments |
| `book_appointment(date, slot, mode)` | Creates a new appointment with a confirmation code; persists in state |
| `find_jobs(keywords, postcode, limit)` | Ranks five mock local vacancies with match score and commute |
| `request_callback(reason, urgency)` | Schedules a callback from a specialist (mental health, debt, housing) |

### Priya (voice) on ElevenLabs ConvAI

The green "Call Priya" home-screen icon opens a real voice agent:

- Voice: Srijani (UK Indian female, `gfpev90Eo7TGmJoNjWyd`) — same voice as the scripted scenario audio
- Model: `eleven_turbo_v2` TTS · `gemini-2.0-flash-001` LLM
- Knowledge base: a comprehensive Restart adviser doc (eligibility, appointments, training, UC taper, in-work support, FAQ, Maximus service handoffs)
- System tools: `transfer_to_number` (SIP REFER to +1 402 973 2385 when the customer insists on a human or there's a safeguarding concern), `end_call`

### Max Navigator

The deterministic, rule-based engagement scorer used three times in the journey (one start-policy, one mid-journey check, one escalation). Explicitly NOT an LLM call: the scorecard, weights, and formula are visible on screen. Seven signals → weighted sum → band → action:

| Signal | Weight |
|---|---|
| SMS reply rate (14 days) | 20% |
| Push notification open rate | 15% |
| Action-plan completion this week | 15% |
| CV review progress | 15% |
| Vacancies saved or viewed | 10% |
| Adviser sessions attended | 15% |
| Open barriers (inverse) | 10% |

Bands: ≥75 ON-TRACK · 50–74 DRIFTING · <50 AT-RISK. Action per band: stay-the-course, in-person 48h, or call-today + mental-health referral.

---

## Architecture

```
Browser (CloudFront / S3)
  │
  ├─ Cognito user-pool sign-in (USER_PASSWORD_AUTH) ──→ JWT
  │
  ├─ ElevenLabs ConvAI widget (Priya, voice)
  │
  └─ InvokeAgentRuntime (Authorization: Bearer <JWT>)
       │
       ▼
     Bedrock AgentCore Runtime (Sarah, text)
       │  container image on ECR
       │  ARM64, built by AWS CodeBuild
       │
       └─→ Strands Agent (Sarah persona)
              ├─ system prompt (UK Restart adviser voice)
              ├─ Strands tools (book, find, lookup, callback)
              └─ Bedrock model (Amazon Nova Pro)

QuickSight Enterprise + Q
  │
  ├─ Athena workgroup over S3 + Glue (10,287-row synthetic dataset)
  ├─ 8 SPICE datasets (customers, advisers, journeys, journey_stages,
  │   router_scores, outcomes_kpis, personas, scenarios)
  ├─ 5 dashboards (Executive, Adviser, Customer, Progress, Scenarios)
  ├─ 1 Q topic ("Restart Programme") for natural-language Q&A
  └─ Scenarios (Quick Suite Generative-BI) opt-in
```

Nova Pro is used for the Strands agent because account 348425780214 has not submitted the Anthropic use-case form yet (Claude returns `ResourceNotFoundException`). Nova Pro supports tools and works immediately. To switch back, change `MODEL_ID` in `agent/deploy.py` once the form is approved.

---

## Repo layout

```
restart-journey-sim/
├── index.html                       Whole iPhone sim frontend
├── adviser-bundle.js                esbuild bundle of agent-client.js
├── adviser-config.js                Per-account QS/Cognito ids (gitignored)
├── deploy-web.py                    S3 + CloudFront deploy
│
├── web/
│   └── src/agent-client.js          Cognito + AgentCore bearer-token client
│
├── agent/                           Sarah - Strands agent on AgentCore
│   ├── agentcore_app.py             AgentCore Runtime entrypoint
│   ├── server.py                    Local FastAPI fallback
│   ├── tools.py                     Four @tool functions
│   ├── state.py                     JSON state store
│   ├── Dockerfile                   ARM64 container image
│   ├── deploy.py                    ECR + CodeBuild + AgentCore + Cognito
│   └── run.sh                       Local dev launcher
│
├── agent-priya/                     Priya - ElevenLabs ConvAI voice agent
│   ├── kb_restart.md                Restart adviser knowledge base
│   └── create_priya.py              Idempotent agent + KB creator
│
├── audio/                           ElevenLabs voiced scenarios
│   ├── scripts.json                 Per-scenario line scripts
│   ├── generate.py                  TTS + ffmpeg stitch
│   ├── ontrack/                     9 lines · 55 s
│   ├── drifting/                    11 lines · 64 s
│   └── atrisk/                      15 lines · 90 s
│
├── bi/                              QuickSight + Athena business intel
│   ├── scripts/
│   │   ├── generate.py              10,287-row synthetic data generator
│   │   ├── scenarios.py             Persona + what-if CSV emitter
│   │   ├── dashboards.py            All five dashboard definitions
│   │   └── deploy.py                Idempotent S3 → Glue → Athena → QS deploy
│   └── data/
│       ├── customers.csv            10,287 rows
│       ├── advisers.csv             247 rows
│       ├── journeys.csv             10,287 rows w/ journey_state + success_probability
│       ├── journey_stages.csv       ~122,615 rows
│       ├── router_scores.csv        ~16,310 rows (Max Navigator scores per check)
│       ├── outcomes_kpis.csv        ~2,199 region × adviser × month aggregates
│       ├── personas.csv             6 hand-written customer personas
│       └── scenarios.csv            3 what-if multipliers (baseline / hiring_boom / recession)
│
└── walkthrough/                     Playwright recorder for demo video
```

---

## Setup from scratch

Prereqs: AWS account with Bedrock model access (Nova Pro works immediately; Anthropic requires the use-case form), AWS CLI signed in, Python 3.12+, Node 18+, an ElevenLabs API key with ConvAI enabled.

```bash
# 1. Clone
git clone https://github.com/636137/restart-journey-sim
cd restart-journey-sim

# 2. Python venv
python3 -m venv ~/.venvs/restart-adviser
source ~/.venvs/restart-adviser/bin/activate
pip install -r agent/requirements.txt boto3 requests

# 3. Deploy Sarah (Strands agent on AgentCore)
python3 agent/deploy.py
# Writes agent/deploy-output.json

# 4. Build the browser bundle
cd web && npm install && npm run build && cd ..

# 5. Deploy the iPhone sim to S3 + CloudFront
python3 deploy-web.py
# Writes web-deploy-output.json with the CloudFront URL

# 6. Deploy Priya (voice agent on ElevenLabs ConvAI)
export ELEVENLABS_API_KEY=...
python3 agent-priya/create_priya.py
# Writes agent-priya/agent.json - paste the agent_id into index.html
# inside the <elevenlabs-convai agent-id="..."> tag, then re-deploy the
# web bundle.

# 7. (Optional) Generate scripted scenario audio
cd audio && python3 generate.py && cd ..
# Re-deploy the web bundle to upload audio/

# 8. Deploy the BI stack (QuickSight + Athena + Glue + 10,287 rows)
python3 bi/scripts/generate.py    # synth CSVs
python3 bi/scripts/scenarios.py   # personas + scenarios CSVs
python3 bi/scripts/deploy.py
# Writes bi/deploy-output.json with dashboard URLs

# 9. Open the QuickSight URLs printed in step 8 and sign in
```

### Iterating

| Change | Redeploy with |
|--------|---------------|
| Frontend (HTML / CSS / JS in `index.html`) | `python3 deploy-web.py` |
| `agent-client.js` (Cognito / AgentCore wiring) | `cd web && npm run build && cd .. && python3 deploy-web.py` |
| Sarah's Strands tools, agent prompt, image | `python3 agent/deploy.py` |
| Sarah env vars only (e.g. swap model id) | Edit `agent/deploy.py` and rerun |
| Priya's prompt or knowledge base | Edit `agent-priya/kb_restart.md` then `python3 agent-priya/create_priya.py` |
| BI dashboard layout/visuals | Edit `bi/scripts/dashboards.py` then `python3 bi/scripts/deploy.py` |
| Synthetic data | Edit `bi/scripts/generate.py` and rerun, then `bi/scripts/deploy.py` will reupload + re-ingest |

### Local dev without AgentCore

```bash
# Terminal 1 - Sarah agent
~/restart-journey-sim/agent/run.sh        # FastAPI on :8000

# Terminal 2 - site
cd ~/restart-journey-sim
python3 -m http.server 8765               # http://localhost:8765
```

The Live Chat banner reads "Local dev mode" when the bundle can't reach AgentCore.

---

## Security notes

- Credentials are not baked into the static bundle. The page renders a sign-in overlay that authenticates against Cognito via `USER_PASSWORD_AUTH` and then talks to AgentCore as a Bearer JWT.
- The S3 bucket is private; CloudFront uses an Origin Access Control to fetch from it.
- AgentCore Runtime authenticates via the Cognito-pool discovery URL (`customJWTAuthorizer`). SigV4 access is not configured.
- The ElevenLabs ConvAI widget loads `https://elevenlabs.io/convai-widget/index.js` and connects to a public agent id; do not put PII or production-sensitive data in the demo.
- To rotate the Cognito Admin password: `aws cognito-idp admin-set-user-password --user-pool-id <id> --username Admin --password <new> --permanent`
- To add more users: `aws cognito-idp admin-create-user --user-pool-id <id> --username <name> --temporary-password <pw>` then `admin-set-user-password ... --permanent`
- For PoCs only. Anyone signed in shares the agent's session memory and can mutate `state.json`.

---

## BI: dashboards in detail

All five live in QuickSight Enterprise (us-west-2) over Athena + Glue over S3 with SPICE-mode acceleration. They share a custom **Maximus** theme (purple/teal palette, white sheets, no tile borders).

### Dashboards

| Dashboard | What you see |
|---|---|
| `dash-executive` | 4 KPIs with monthly sparkline trends · outcomes donut · scenario-band donut · per-region small-multiples line · region × month sustainability heatmap · region treemap |
| `dash-adviser` | 4 KPIs · top-12 adviser table · satisfaction × caseload scatter · per-region small-multiples line · radar of placements by region · adviser-headcount treemap |
| `dash-customer` | 4 KPIs · 12-stage journey funnel · Max Navigator band donut · network gauge · region treemap · scenario × region barriers heatmap · sustainability trend by scenario band |
| `dash-progress` | 4 KPIs · network success-probability gauge · journey-state donut · stage → state Sankey · state-volume treemap · state-composition stacked area · stage × state probability heatmap · region small-multiples · region × state pivot · funnel · region radar |
| `dash-scenarios` | 4 KPIs across the persona library · persona detail table (6 rows) · journey-state donut · band donut · per-persona radar · success-probability head-to-head · days-to-placement head-to-head · regional treemap · what-if multiplier table |

Every KPI shows the current number plus a monthly sparkline behind it so historical and current data read together.

Bar charts are kept only where length comparison is the point (top-N tables) or where ranking 6 named personas head-to-head is the cleanest read. Everywhere else we use treemaps, donuts, small-multiples, gauges, heatmaps, funnels, radars, and Sankey flows.

### Q topic

A natural-language topic called **Restart Programme** is wired to all six dataset tables. Ask things like:

- *"Which adviser has the highest sustained-placement rate in South & East London?"*
- *"Show me average days to placement by Max Navigator scenario band and region."*
- *"What's the placement rate for customers with mental health as a barrier?"*

### Quick Suite Scenarios (Generative BI)

Open the [Scenarios page](https://us-west-2.quicksight.aws.amazon.com/sn/account/restart-bi-348425780214/start/scenarios) and click **+ New Scenario**. Three ready-made prompts in the repo:

1. **Max Navigator under-served audit** — find segments where the mid-journey check misses customers who later drop out. Attach `ds-journeys`, `ds-router-scores`, `ds-customers`.
2. **Adviser rebalancing** — cluster the 247 advisers by caseload, satisfaction, and sustainability; recommend the top 10 reassignment moves. Attach `ds-advisers`, `ds-outcomes-kpis`, `ds-journeys`.
3. **Recession stress test** — apply the recession multipliers from `ds-scenarios` and predict which regions and advisers will breach the 50% sustainability floor. Attach `ds-journeys`, `ds-customers`, `ds-scenarios`, `ds-outcomes-kpis`.

---

## What's left

- Nova's `<thinking>` token bleed-through (occasional) in Sarah's replies. Tighten the system prompt or filter on the way out.
- Real "in-work" content cards beyond the existing nudge.
- Cross-program referral handoff (Adult Skills Fund / Access to Work) is currently a copy-only link; a real demo could wire a Strands tool that creates a referral ticket.
- QuickSight `dash-scenarios` table-only what-if multipliers; wire QuickSight parameters + calculated fields so a dropdown switches the network into recession/boom modes inside the other four dashboards.

---

## License

Demo code, MIT-style. Not for production use.
