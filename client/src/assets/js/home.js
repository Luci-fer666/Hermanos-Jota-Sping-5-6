const cont = document.getElementById('destacados');
if (cont) {
  const obtenerProductos = () => new Promise(res => setTimeout(() => res(productos), 500));
  obtenerProductos().then(items => {
    // tomar 4 al azar o los 4 primeros
    items.slice(0,4).forEach((p, idx) => {
      const li = document.createElement('li');
      li.className = 'producto-item';
      li.innerHTML = `
        <article>
          <img class="thumb" src="${p.imagen}" alt="${p.nombre}">
          <h3><a class="product-link" href="producto.html?id=${idx}">${p.nombre}</a></h3>
          <p class="precio-producto">ARS $${p.precio}</p>
          <a class="btn primary" href="producto.html?id=${idx}">Ver detalle</a>
        </article>`;
      cont.appendChild(li);
    });
  });
}
