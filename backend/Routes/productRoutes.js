const express = require('express');
const router = express.Router();
const productos = require('../productos');
const Producto = require('../DB/models/Product');

// GET /productos → devuelve todos los productos
router.get('/', async (req, res) => {
  try {
    const todosLosProductos = await Producto.find({});
    res.json(todosLosProductos);
  } catch (error) {
    console.error("Error al buscar todos los productos: ", error.message);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});

// GET /productos/:id → devuelve un producto por ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const productoEncontrado = await Producto.findById(id);

    if (!productoEncontrado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(productoEncontrado);
    } catch (error) {
      console.error("Error al buscar producto por su ID: ", error.message);
      res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
});

module.exports = router;