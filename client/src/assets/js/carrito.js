
document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('carrito-lista');
  const totalEl = document.getElementById('carrito-total');
  const vaciarBtn = document.getElementById('vaciar-carrito');

  if (!cont || !totalEl) return;

  function render() {
    const items = window.getCartItems(); 
    cont.innerHTML = '';

    // Si no hay productos cargados aún, salir
    const data = (window.productos || (typeof productos !== 'undefined' ? productos : []));
    if (!Array.isArray(data) || data.length === 0) return;

    let total = 0;

    items.forEach(({ id, qty }) => {
      const p = data.find(x => Number.isFinite(x.id) ? x.id === id : data.indexOf(x) === id)
              || data[id]; 
      if (!p) return;

      const subtotal = (p.precio || 0) * (qty || 0);
      total += subtotal;

      const li = document.createElement('li');
      li.className = 'carrito-item';
      li.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" width="70">
        <div class="info">
          <h3>${p.nombre}</h3>
          <p>Precio: ARS $${p.precio}</p>
          <p>Cantidad: ${qty}</p>
          <p>Subtotal: <strong>ARS $${subtotal}</strong></p>
        </div>
      `;
      cont.appendChild(li);
    });

    totalEl.textContent = `ARS $${total}`;
  }

  render();

  if (vaciarBtn) {
    vaciarBtn.addEventListener('click', () => {
      window.clearCart();
      render();
    });
  }
});
