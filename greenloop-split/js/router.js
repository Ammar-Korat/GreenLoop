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
