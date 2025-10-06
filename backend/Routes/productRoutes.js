const express = require('express');
const productRouter = express.Router();
const productos = require('../productos');

productRouter.get('/:id', (req, res) => {
  const producto = productos.find(u => u.id === parseInt(req.params.id));
  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.json(producto);
});

productRouter.get('/', (req, res) => {
  res.json(productos);
});
module.exports = productRouter;