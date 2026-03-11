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
