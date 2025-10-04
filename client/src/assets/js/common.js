
(function initCart() {
  const CART_KEY = 'cart'; 
  const COUNT_KEY = 'cartCount'; 

  const readCart = () => {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
    catch { return []; }
  };
  const writeCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    
    const total = cart.reduce((acc, it) => acc + (it.qty || 0), 0);
    localStorage.setItem(COUNT_KEY, String(total));
    paintCount(total);
  };

  const readCount = () => parseInt(localStorage.getItem(COUNT_KEY) || '0', 10);

  function paintCount(n = readCount()) {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = n;
  }


  window.addToCart = function addToCart(productId, qty = 1) {
    if (!Number.isFinite(productId)) return;
    const cart = readCart();
    const idx = cart.findIndex(it => it.id === productId);
    if (idx >= 0) cart[idx].qty += (Number.isFinite(qty) ? qty : 1);
    else cart.push({ id: productId, qty: Number.isFinite(qty) ? qty : 1 });
    writeCart(cart);
  };

  window.getCartItems = function getCartItems() {
    return readCart(); // [{id, qty}]
  };

  window.clearCart = function clearCart() {
    writeCart([]);
  };

  
  paintCount();
})();
