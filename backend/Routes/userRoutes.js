const express = require('express');
const usersRouter = express.Router();
 
const users = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }];
 
usersRouter.get('/', (req, res) => {
  res.json(users);
});
 
usersRouter.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json(user);
});

usersRouter.post('/', (req, res) => {
    res.status(201).json({ message: 'Usuario creado' });
});
 
module.exports = usersRouter;