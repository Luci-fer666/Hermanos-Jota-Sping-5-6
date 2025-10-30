const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware global para parsear JSON
app.use(express.json());

// Logger de peticiones
const logger = require('./logger');
app.use(logger);

// Routers
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Ruta raíz solo para checkear que el servidor está vivo
app.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido al servidor de Mueblería Jota!' });
});

// Middleware para rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: `Ruta no encontrada: ${req.originalUrl}` });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.message, err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Ha ocurrido un error en el servidor.',
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});