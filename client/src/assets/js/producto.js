
(function initProducto() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProducto);
    return;
  }


  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");

  const detalle = document.querySelector("#producto-detalle");
  const caracteristicas = document.querySelector("#producto-caracteristicas");

  // Si faltan contenedores, salir sin romper
  if (!detalle || !caracteristicas) {
    console.warn("[producto.js] No encontré contenedores #producto-detalle o #producto-caracteristicas.");
    return;
  }

  const data = (window.productos || (typeof productos !== "undefined" ? productos : []));
  const idx = Number.parseInt(idParam, 10);

  let producto = null;
  if (idParam === null || Number.isNaN(idx)) {
    producto = null;
  } else {
    // Si los objetos tienen campo id numérico, buscá por id; si no, usá índice
    const porId = Array.isArray(data) ? data.find(p => Number.isFinite(p?.id) && p.id === idx) : null;
    producto = porId || (Array.isArray(data) ? data[idx] : null);
  }

  //  Render según exista o no el producto
  if (!producto) {
    detalle.innerHTML = "<p>Lo sentimos, producto no encontrado</p>";
    caracteristicas.innerHTML = "";
    return;
  }

  // Render del detalle (tu lógica original, intacta + robustez)
  detalle.innerHTML = `
    <h1>${sanitize(producto.nombre)}</h1>
    <img src="${sanitize(producto.imagen)}" alt="${sanitize(producto.nombre)}" width="300">
    ${producto.descripcion ? `<p class="descripcion-producto-ind">${sanitize(producto.descripcion)}</p>` : ""}
    <p class="precio-ind"><strong>Precio (ARS):</strong> $${Number(producto.precio) || producto.precio}</p>
  `;

  //  Render de características (tu lógica original, con filtros)
  caracteristicas.innerHTML = "";
  try {
    Object.entries(producto).forEach(([key, value]) => {
      // Retornamos solo la información importante.
      if (key !== "id" && key !== "nombre" && key !== "imagen" && key !== "descripcion" && key !== "precio" && value !== null && value !== undefined) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${escapeHTML(key)}:</strong> ${escapeHTML(String(value))}`;
        caracteristicas.appendChild(li);
      }
    });
  } catch (e) {
    console.warn("[producto.js] No pude iterar características:", e);
  }

  //  Botón "Añadir al carrito" con feedback
  const btn = document.createElement("button");
  btn.className = "btn primary";
  btn.textContent = "Añadir al carrito";
  btn.addEventListener("click", () => {
    const prodId = Number.isFinite(producto.id) ? producto.id : idx;

    // Sumar al carrito usando la API global de common.js
    if (typeof window.addToCart === "function") {
      window.addToCart(prodId, 1);
    } else {
      console.warn("[producto.js] window.addToCart no está disponible. ¿Cargaste assets/js/common.js antes?");
    }

    // Feedback rápido para que no parezca que se congela
    const prevText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "¡Añadido! ✓";
    showToast("Producto añadido");

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = prevText; 
    }, 1200);



  });
  detalle.appendChild(btn);

})();




function sanitize(v) {
  if (v === null || v === undefined) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHTML(v) {
  return sanitize(v).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}


function showToast(msg) {
  try {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1200);
  } catch (e) {
   
  }
}
