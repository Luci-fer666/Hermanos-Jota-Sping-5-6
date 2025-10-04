// La variable del carrito se lee del almacenamiento local del navegador
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Lógica para agregar productos
function addToCart(productId, quantity = 1) {
  const existingItem = carrito.find(item => item.id === productId);
  if (existingItem) {
    existingItem.cantidad += quantity;
  } else {
    carrito.push({ id: productId, cantidad: quantity });
  }
  guardarCarrito();
  actualizarContadorCarrito();
}

// Lógica para actualizar el contador del carrito
function actualizarContadorCarrito() {
  const cartCountElement = document.getElementById('cart-count');
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

// Llama a la función de actualización cada vez que la página carga
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);