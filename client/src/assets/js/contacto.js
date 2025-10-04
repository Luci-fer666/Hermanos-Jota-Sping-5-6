document.addEventListener('DOMContentLoaded', () => {
  const f = document.getElementById('form-contacto');
  if (!f) return;

  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!f.checkValidity()) { f.reportValidity(); return; }

    const nombre = (f.nombre?.value || '').trim();
    const email  = (f.email?.value  || '').trim();

    const ok = document.createElement('div');
    ok.className = 'form-ok';
    ok.setAttribute('role','status');
    ok.setAttribute('aria-live','polite');
    ok.innerHTML = `
      <p>Gracias${nombre ? ', ' + esc(nombre) : ''}. Recibimos tu mensaje.</p>
      ${email ? `<p>Te respondemos a <b>${esc(email)}</b>.</p>` : '' }
    `.trim();

    f.replaceWith(ok);
  });
});

function esc(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
