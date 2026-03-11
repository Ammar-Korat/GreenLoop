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
