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
