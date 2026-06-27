// Playwright recorder for the Restart demo videos.
//
// Usage:
//   node record.js sizzle
//   node record.js exec
//   node record.js full
//
// For each scene in video/<id>/timeline.json the recorder runs the matching
// action(s) and then waits for the scene's narration duration before moving
// on. Output: video/<id>/screen.webm (Playwright records the page).
//
// Notes:
//   - We disable the sim's in-page audio so the scenario call/voice agents
//     don't fight the narration we'll lay over later.
//   - We sign in with Admin / MaxRestart2026 (the live demo's gated creds).

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const VIDEO_ID = process.argv[2];
if (!VIDEO_ID || !['sizzle','exec','full'].includes(VIDEO_ID)) {
  console.error('usage: node record.js {sizzle|exec|full}');
  process.exit(1);
}

const HERE = __dirname;
const TIMELINE = JSON.parse(fs.readFileSync(path.join(HERE, VIDEO_ID, 'timeline.json'), 'utf8'));
const SCENES = TIMELINE.scenes;
const sceneDur = (id) => {
  const s = SCENES.find(x => x.id === id);
  if (!s) throw new Error(`scene not found: ${id}`);
  return s.duration_ms;
};
const sceneStart = (id) => SCENES.find(x => x.id === id).start_ms;

const URL = process.env.DEMO_URL || 'https://d359kxb9ewfhy0.cloudfront.net/index.html';
const USER = process.env.DEMO_USER || 'Admin';
const PASS = process.env.DEMO_PASS || 'MaxRestart2026';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function setup(page) {
  // Sign in
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('#signinUser', { timeout: 15000 });
  await page.fill('#signinUser', USER);
  await page.fill('#signinPass', PASS);
  await page.click('#signinBtn');
  // Wait for the persona picker (signin overlay hidden)
  await page.waitForSelector('#personaOverlay.show', { timeout: 15000 });
  // Mute all audio elements to avoid clash with narration
  await page.evaluate(() => {
    const orig = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function() { this.muted = true; return orig.apply(this, arguments); };
    document.querySelectorAll('audio').forEach(a => a.muted = true);
  });
}

async function pickPersona(page, personaId) {
  await page.evaluate((pid) => pickPersona(pid), personaId);
  // Wait until matching animation opens
  await page.waitForSelector('#matchOverlay.show', { timeout: 8000 });
}

async function tap(page, fn, ...args) {
  try { await page.evaluate(fn, ...args); }
  catch (e) { console.warn('[tap]', e.message); }
}

// Fire a journey stage by ID (robust to JOURNEY index shifts).
async function fireById(page, stageId) {
  await tap(page, (sid) => {
    const idx = JOURNEY.findIndex(s => s.id === sid);
    if (idx >= 0) { try { fireStage(idx); } catch(_){} }
  }, stageId);
}

// ---------- FLOWS ----------

async function runSizzle(page) {
  await setup(page);
  // siz_open: stay on persona picker
  await sleep(sceneDur('siz_open'));
  // siz_personas: hover over a few tiles
  await page.hover('.persona-tile:nth-child(1)').catch(()=>{});
  await sleep(900);
  await page.hover('.persona-tile:nth-child(3)').catch(()=>{});
  await sleep(900);
  await page.hover('.persona-tile:nth-child(5)').catch(()=>{});
  await sleep(Math.max(0, sceneDur('siz_personas') - 1800));
  // siz_matrix: pick Daniel, run match
  await pickPersona(page, 'daniel');
  await sleep(sceneDur('siz_matrix'));
  // siz_nudge: skip match, fire nudgeDiagnostic
  await tap(page, () => endMatchAnim && endMatchAnim());
  await sleep(800);
  await fireById(page, 'referral');
  await sleep(600);
  await fireById(page, 'nudgeDiagnostic');
  await sleep(sceneDur('siz_nudge'));
  // siz_check: fire mid-journey check stage
  await fireById(page, 'routerCheck');
  await sleep(sceneDur('siz_check'));
  // siz_survival
  await tap(page, () => { closeRouterCheck(); setTimeout(()=>openSurvivalOverlay(), 200); });
  await sleep(sceneDur('siz_survival'));
  // siz_voice: close survival, open language picker
  await tap(page, () => closeSurvivalOverlay && closeSurvivalOverlay());
  await sleep(400);
  await tap(page, () => openLanguagePicker && openLanguagePicker());
  await sleep(sceneDur('siz_voice'));
  // siz_close
  await tap(page, () => closeLanguagePicker && closeLanguagePicker());
  await sleep(sceneDur('siz_close'));
}

async function runExec(page) {
  await setup(page);
  // signin: persona picker visible
  await sleep(sceneDur('exe_signin'));
  // personas: hover each tile briefly
  for (let i = 1; i <= 6; i++) {
    await page.hover(`.persona-tile:nth-child(${i})`).catch(()=>{});
    await sleep(Math.floor(sceneDur('exe_personas') / 6));
  }
  // matrix: pick Mark to show a non-default match
  await pickPersona(page, 'mark');
  await sleep(sceneDur('exe_matrix'));
  // match revealed: end animation, sit on iPhone
  await tap(page, () => endMatchAnim && endMatchAnim());
  await sleep(sceneDur('exe_match'));
  // journey: fire first 6 stages by id
  const execStages = ['referral','diagnostic','nudgeDiagnostic','actionplan','skills','jobmatch'];
  for (const sid of execStages) {
    await fireById(page, sid);
    await sleep(Math.max(450, Math.floor(sceneDur('exe_journey') / (execStages.length + 1))));
  }
  // check: open the Max Navigator mid-journey check
  await fireById(page, 'routerCheck');
  await sleep(sceneDur('exe_check'));
  // survival: close router, open survival overlay
  await tap(page, () => { closeRouterCheck(); setTimeout(()=>openSurvivalOverlay(), 250); });
  await sleep(sceneDur('exe_survival'));
  // voicecall: close survival, open the scenario call overlay
  await tap(page, () => closeSurvivalOverlay && closeSurvivalOverlay());
  await sleep(400);
  await tap(page, () => openScenarioCall && openScenarioCall());
  await sleep(sceneDur('exe_voicecall'));
  // translation: close call, open language picker, pick Polish, close
  await tap(page, () => closeScenarioCall && closeScenarioCall());
  await sleep(400);
  await tap(page, () => openLanguagePicker && openLanguagePicker());
  await sleep(2200);
  await page.click('.lang-chip[data-code="pl"]').catch(()=>{});
  await sleep(Math.max(0, sceneDur('exe_translation') - 2600));
  // graph: jump to in-support to trigger the training-update overlay
  await tap(page, () => { const i = JOURNEY.findIndex(s=>s.id==='insupport'); if (i>=0) jumpTo(i); });
  await sleep(4500);  // training overlay takes ~4s to open
  await page.click('#trainingGraph').catch(()=>{}); // click expert
  await sleep(Math.max(0, sceneDur('exe_graph') - 4500));
  // close
  await tap(page, () => closeTrainingUpdate && closeTrainingUpdate());
  await sleep(sceneDur('exe_close'));
}

async function runFull(page) {
  await setup(page);
  await sleep(sceneDur('full_signin'));
  for (let i = 1; i <= 6; i++) {
    await page.hover(`.persona-tile:nth-child(${i})`).catch(()=>{});
    await sleep(Math.floor(sceneDur('full_personas') / 6));
  }
  await pickPersona(page, 'fadumo');  // Welsh adviser, Somali translator path
  await sleep(sceneDur('full_matrix'));
  await tap(page, () => endMatchAnim && endMatchAnim());
  await sleep(sceneDur('full_match_done'));
  const fullStages = ['referral','diagnostic','actionplan','skills','jobmatch'];
  for (const sid of fullStages) {
    await fireById(page, sid);
    await sleep(Math.max(400, Math.floor(sceneDur('full_journey') / (fullStages.length + 1))));
  }
  // nudge
  await fireById(page, 'nudgeDiagnostic');
  await sleep(400);
  await tap(page, () => { try { tapNotif(); } catch(_){} });
  await sleep(sceneDur('full_nudge'));
  // check
  await fireById(page, 'routerCheck');
  await sleep(sceneDur('full_check'));
  // check action card moment
  await sleep(sceneDur('full_check_action'));
  // survival
  await tap(page, () => { closeRouterCheck(); setTimeout(()=>openSurvivalOverlay(), 250); });
  await sleep(sceneDur('full_survival'));
  // voice call
  await tap(page, () => closeSurvivalOverlay && closeSurvivalOverlay());
  await sleep(400);
  await tap(page, () => openScenarioCall && openScenarioCall());
  await sleep(sceneDur('full_voicecall'));
  // translation
  await tap(page, () => closeScenarioCall && closeScenarioCall());
  await sleep(400);
  await tap(page, () => openLanguagePicker && openLanguagePicker());
  await sleep(2200);
  await page.click('.lang-chip[data-code="so"]').catch(()=>{});
  await sleep(Math.max(0, sceneDur('full_translation') - 2600));
  // graph
  await tap(page, () => { const i = JOURNEY.findIndex(s=>s.id==='insupport'); if (i>=0) jumpTo(i); });
  await sleep(4500);
  await page.click('#trainingGraph').catch(()=>{});
  await sleep(Math.max(0, sceneDur('full_graph') - 4500));
  // dashboards: stay on the training-update overlay (QuickSight tab requires AWS auth
  // which Playwright doesn't have here). Narration describes the dashboards while
  // the camera lingers on the graph view + halo panels.
  await page.click('#trainingGraph').catch(()=>{});  // re-click for a different halo
  await sleep(sceneDur('full_dashboards'));
  // close
  await tap(page, () => closeTrainingUpdate && closeTrainingUpdate());
  await sleep(sceneDur('full_close'));
}

(async () => {
  const outDir = path.join(HERE, VIDEO_ID);
  const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required', '--force-color-profile=srgb'] });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 880 },
    deviceScaleFactor: 2,
    recordVideo: { dir: outDir, size: { width: 1280, height: 880 } },
  });
  const page = await context.newPage();
  try {
    if (VIDEO_ID === 'sizzle') await runSizzle(page);
    else if (VIDEO_ID === 'exec') await runExec(page);
    else if (VIDEO_ID === 'full')  await runFull(page);
  } catch (e) {
    console.error('record error:', e.message);
  } finally {
    await context.close();
    await browser.close();
  }
  // Rename the auto-saved webm to a stable filename
  const recs = fs.readdirSync(outDir).filter(f => f.endsWith('.webm'));
  if (recs.length) {
    const src = path.join(outDir, recs.sort().pop());
    const dst = path.join(outDir, 'screen.webm');
    fs.renameSync(src, dst);
    console.log(`recorded: ${dst}`);
  } else {
    console.log('no webm found - check Playwright recordVideo path');
  }
})();
