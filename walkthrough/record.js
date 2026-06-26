// Records a narrated-timed walkthrough of the Restart journey app.
// Each step performs an action, then holds for its narration duration.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const URL = 'http://localhost:8755/index.html';
const manifest = JSON.parse(fs.readFileSync(path.join(BASE, 'manifest.json')));
const dur = id => (manifest.find(m => m.id === id).dur) * 1000;

// settle pad added on top of narration so motion finishes before next line (ms)
const PAD = 350;

const sleep = ms => new Promise(r => setTimeout(r, ms));

const cues = [];   // {id, offset} real start time of each narration, in seconds from record start
let T0 = 0;

(async () => {
  const browser = await chromium.launch({ args: ['--force-color-profile=srgb'] });
  const context = await browser.newContext({
    viewport: { width: 1180, height: 920 },
    deviceScaleFactor: 2,
    recordVideo: { dir: path.join(BASE, 'video'), size: { width: 1180, height: 920 } },
  });
  const page = await context.newPage();
  T0 = Date.now();  // video frames begin ~here; cue offsets measured from this origin
  await page.goto(URL, { waitUntil: 'networkidle' });

  // Freeze the notification auto-hide so banners stay until we act.
  await page.evaluate(() => { window.__origHide = window.hideNotif; window.hideNotif = () => {}; });
  // helper to truly hide when we want
  const hardHide = () => page.evaluate(() => {
    const n = document.getElementById('notif'); n.classList.remove('show'); n.classList.add('hide');
  });

  const hold = async (id, extra = 0) => {
    cues.push({ id, offset: (Date.now() - T0) / 1000 });
    await sleep(dur(id) + PAD + extra);
  };

  // ---- s00 intro: sit on home ----
  await page.evaluate(() => { resetJourney(); goHome(); });
  await sleep(400);
  await hold('s00_intro');

  // ---- s01 home tour ----
  await hold('s01_home');

  // ---- s02 referral notification ----
  await page.evaluate(() => fireStage(0));
  await sleep(700); // banner slides in
  await hold('s02_referral_notif');

  // ---- s03 open SMS, show thread ----
  await hardHide(); await sleep(260);
  await page.evaluate(() => openMessages('referral'));
  await sleep(650);
  await hold('s03_referral_sms');

  // ---- s04 send quick reply + auto-reply ----
  await page.evaluate(() => {
    const inp = document.getElementById('msgInput'); inp.value = 'YES, book it'; sendSms();
  });
  await hold('s04_referral_reply', 600); // covers typing + reply

  // ---- s05 diagnostic SMS ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(1));
  await sleep(700);
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openMessages('diagnostic'); });
  await sleep(650);
  await hold('s05_diagnostic');

  // ---- s06 action plan email notif ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(2));
  await sleep(700);
  await hold('s06_actionplan_email');

  // ---- s07 read action plan email ----
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openMail('actionplan'); });
  await sleep(650);
  // gentle scroll through the email
  await page.evaluate(() => { const d = document.getElementById('mailDetail'); d.scrollTo({ top: 160, behavior: 'smooth' }); });
  await sleep(1600);
  await page.evaluate(() => { const d = document.getElementById('mailDetail'); d.scrollTo({ top: 340, behavior: 'smooth' }); });
  await hold('s07_actionplan_read');

  // ---- s08 skills push ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(3));
  await sleep(700);
  await hold('s08_skills_push');

  // ---- s09 open Restart app, show progress + timeline ----
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openRestart('skills'); });
  await sleep(700);
  await page.evaluate(() => { const b = document.getElementById('raBody'); b.scrollTo({ top: 220, behavior: 'smooth' }); });
  await hold('s09_restart_app');

  // ---- s10 job match ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(4));
  await sleep(700);
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openRestart('jobmatch'); });
  await sleep(650);
  await page.evaluate(() => { document.getElementById('raBody').scrollTo({ top: 0, behavior: 'smooth' }); });
  await hold('s10_jobmatch');

  // ---- s11 apply (tap CTA) ----
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('#raBody .ra-cta')].find(b => /Apply/.test(b.textContent));
    if (btn) btn.click();
  });
  await hold('s11_apply');

  // ---- s12 interview SMS ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(5));
  await sleep(700);
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openMessages('interview'); });
  await sleep(650);
  await hold('s12_interview');

  // ---- s13 offer email notif ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(6));
  await sleep(700);
  await hold('s13_offer_email');

  // ---- s14 read offer email ----
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openMail('offer'); });
  await sleep(650);
  await page.evaluate(() => { document.getElementById('mailDetail').scrollTo({ top: 220, behavior: 'smooth' }); });
  await sleep(1800);
  await page.evaluate(() => { mailReply(); });
  await hold('s14_offer_read');

  // ---- s15 in-work support push ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => fireStage(7));
  await sleep(700);
  await hold('s15_insupport');

  // ---- s16 open restart, show 100% ----
  await page.evaluate(() => { document.getElementById('notif').classList.remove('show'); document.getElementById('notif').classList.add('hide'); openRestart('insupport'); });
  await sleep(700);
  await hold('s16_progress_full');

  // ---- s17 reset ----
  await page.evaluate(() => { goHome(); });
  await sleep(500);
  await page.evaluate(() => { resetJourney(); });
  await sleep(700);
  await hold('s17_reset');

  await sleep(400);
  const totalWall = (Date.now() - T0) / 1000;
  await context.close(); // finalizes video
  await browser.close();

  fs.writeFileSync(path.join(BASE, 'cues.json'), JSON.stringify({ cues, totalWall }, null, 2));

  // report video path
  const vids = fs.readdirSync(path.join(BASE, 'video')).filter(f => f.endsWith('.webm'));
  console.log('VIDEO_FILE=' + path.join(BASE, 'video', vids.sort().pop()));
  console.log('WALL=' + totalWall.toFixed(2) + 's  CUES=' + cues.length);
})().catch(e => { console.error(e); process.exit(1); });
