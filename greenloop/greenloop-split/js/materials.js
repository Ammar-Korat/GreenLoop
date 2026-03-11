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
