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
