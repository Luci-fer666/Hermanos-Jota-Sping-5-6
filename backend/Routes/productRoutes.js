const express = require('express');
const router = express.Router();
const productos = require('../productos');

// GET /products → devuelve todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// GET /products/:id → devuelve un producto por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json(producto);
});

module.exports = router;