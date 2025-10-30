const express = require('express');
const router = express.Router();
const users = require('../usuarios');

// GET /users → devuelve todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// GET /users/:id → devuelve un usuario por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(user);
});

// POST /users → crear usuario (simulado)
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Usuario creado' });
});

module.exports = router;