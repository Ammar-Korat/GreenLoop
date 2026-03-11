/* ════════════════════════════════════════
   survey.js — Onboarding survey steps
   ════════════════════════════════════════ */

// Step 1 — single-select card
function pickS1(el) {
  document.querySelectorAll('#s1-opts .s-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('s1-next').disabled = false;
}

// Step 2 — single-select pill
function pickS2(el) {
  document.querySelectorAll('#s2-opts .s-opt').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('s2-next').disabled = false;
}

// Step 3 — multi-select toggle
function toggleS3(el) {
  el.classList.toggle('active');
}
