/* ════════════════════════════════════════
   data.js — Materials data & shared state
   ════════════════════════════════════════ */

const MATS = [
  { id: 'plastic', icon: '♻️', name: 'Plastic Bottles (PET)', rate: 8,   unit: 'EGP/kg' },
  { id: 'alum',    icon: '🥫', name: 'Aluminum Cans',         rate: 45,  unit: 'EGP/kg' },
  { id: 'card',    icon: '📦', name: 'Cardboard',             rate: 6,   unit: 'EGP/kg' },
  { id: 'paper',   icon: '📄', name: 'Paper',                 rate: 4,   unit: 'EGP/kg' },
  { id: 'glass',   icon: '🍾', name: 'Glass',                 rate: 1.5, unit: 'EGP/kg' },
  { id: 'metal',   icon: '🔩', name: 'Scrap Metal',           rate: 20,  unit: 'EGP/kg' },
];

// Per-material quantity state
const qty = {};
MATS.forEach(m => qty[m.id] = 0);

// Screens visible only after authentication
const POST_AUTH = [
  'screen-dashboard', 'screen-pickup', 'screen-payment',
  'screen-confirm', 'screen-impact', 'screen-support',
];
/* ════════════════════════════════════════
   router.js — Screen navigation
   ════════════════════════════════════════ */

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
  document.getElementById('nav-bar').classList.toggle('show', POST_AUTH.includes(id));
  if (id === 'screen-dashboard') renderMats();
  if (id === 'screen-confirm')   updatePayout();
}

// Skip loading screen after 2.7s on page load
window.addEventListener('load', () => setTimeout(() => goTo('screen-s1'), 2700));
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
/* ════════════════════════════════════════
   auth.js — Auth tab switching &
             identity document upload
   ════════════════════════════════════════ */

// Toggle between Sign Up / Log In tabs
function switchTab(t) {
  document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.auth-tab')[t === 'signup' ? 0 : 1].classList.add('active');
  document.getElementById('signup-form').style.display = t === 'signup' ? 'block' : 'none';
  document.getElementById('login-form').style.display  = t === 'login'  ? 'block' : 'none';
}

// Show selected file name in the verify screen
function handleUpload(input) {
  if (input.files && input.files[0]) {
    document.getElementById('file-name').textContent = input.files[0].name;
    document.getElementById('file-preview').classList.add('show');
  }
}

// Clear selected file
function clearFile() {
  document.getElementById('file-upload').value = '';
  document.getElementById('file-preview').classList.remove('show');
}
/* ════════════════════════════════════════
   materials.js — Dashboard material grid,
                  quantity controls & summary
   ════════════════════════════════════════ */

// Render all material cards into the grid
function renderMats() {
  document.getElementById('material-grid').innerHTML = MATS.map(m => `
    <div class="mat-card ${qty[m.id] > 0 ? 'has-qty' : ''}" id="mc-${m.id}">
      <div class="mat-icon">${m.icon}</div>
      <div class="mat-name">${m.name}</div>
      <div class="mat-rate">${m.rate} ${m.unit}</div>
      <div class="qty-row">
        <button class="qty-b" onclick="chQty('${m.id}',-1,event)">−</button>
        <div class="qty-val" id="qv-${m.id}">${qty[m.id]}</div>
        <button class="qty-b" onclick="chQty('${m.id}',1,event)">+</button>
      </div>
      <div class="qty-label">kg</div>
    </div>
  `).join('');
  calcSummary();
}

// Increment or decrement a material's quantity
function chQty(id, delta, e) {
  e.stopPropagation();
  qty[id] = Math.max(0, qty[id] + delta);
  document.getElementById('qv-' + id).textContent = qty[id];
  document.getElementById('mc-' + id).classList.toggle('has-qty', qty[id] > 0);
  calcSummary();
}

// Recalculate and display total weight + value
function calcSummary() {
  let weight = 0, value = 0;
  MATS.forEach(m => {
    weight += qty[m.id];
    value  += qty[m.id] * m.rate;
  });
  document.getElementById('total-weight').textContent = weight + ' kg';
  document.getElementById('total-value').textContent  = value.toFixed(0) + ' EGP';
}

// Update the payout amount on the confirm screen
function updatePayout() {
  let value = 0;
  MATS.forEach(m => value += qty[m.id] * m.rate);
  document.getElementById('confirm-payout').textContent =
    (value > 0 ? value.toFixed(0) : 215) + ' EGP';
}
/* ════════════════════════════════════════
   logistics.js — Pickup type toggle &
                  payment method selector
   ════════════════════════════════════════ */

// Select pickup vs drop-off and show relevant detail section
function pickPickup(type, el) {
  document.querySelectorAll('.p-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('p-pickup').classList.toggle('show',  type === 'pickup');
  document.getElementById('p-deliver').classList.toggle('show', type === 'deliver');
}

// Select a payment method and reveal its form fields
function pickPay(id, el) {
  document.querySelectorAll('.pm-card').forEach(c  => c.classList.remove('sel'));
  document.querySelectorAll('.pm-fields').forEach(f => f.classList.remove('show'));
  el.classList.add('sel');
  document.getElementById('pf-' + id).classList.add('show');
}
/* ════════════════════════════════════════
   support.js — FAQ accordion &
                contact form submission
   ════════════════════════════════════════ */

// Toggle a FAQ item open/closed
function toggleFaq(el) {
  const answer  = el.nextElementSibling;
  const chevron = el.querySelector('.faq-chev');
  answer.classList.toggle('open');
  chevron.classList.toggle('open');
}

// Show a temporary toast notification
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Handle contact form submission
function sendMsg() {
  showToast('✅ Message sent! We\'ll get back to you soon.');
}
