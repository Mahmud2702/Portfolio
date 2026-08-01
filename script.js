// ── THEME TOGGLE ──────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  updatePills();
  localStorage.setItem('theme', html.dataset.theme);
}

function updatePills() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.getElementById('pill-dark').classList.toggle('active', isDark);
  document.getElementById('pill-light').classList.toggle('active', !isDark);
}

const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.dataset.theme = saved;
updatePills();

// ── SCROLL REVEAL ─────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── FORM → GOOGLE SHEETS ──────────────────────────────
const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

async function handleSubmit(e) {
  e.preventDefault();
  const btn    = document.getElementById('cf-btn');
  const status = document.getElementById('cf-status');
  const name    = document.getElementById('cf-name').value;
  const email   = document.getElementById('cf-email').value;
  const subject = document.getElementById('cf-subject').value;
  const message = document.getElementById('cf-message').value;

  btn.textContent = 'Sending…';
  btn.disabled = true;
  status.style.display = 'none';

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);
  formData.append('timestamp', new Date().toLocaleString());

  try {
    await fetch(GOOGLE_SHEET_URL, { method: 'POST', body: formData, mode: 'no-cors' });
    btn.textContent = '✓ Sent!';
    btn.style.background = 'var(--accent)';
    status.textContent = "Message received! I'll get back to you soon.";
    status.style.display = 'block';
    e.target.reset();
  } catch (err) {
    btn.textContent = 'Failed — Try Again';
    btn.style.background = '#e53e3e';
    status.textContent = 'Something went wrong. Please email me directly.';
    status.style.display = 'block';
    status.style.color = '#e53e3e';
  } finally {
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      status.style.display = 'none';
    }, 4000);
  }
}
