const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

//El Traductor de JSON
app.use(express.json());

// Routers
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Logger de Peticiones
const logger = require('./logger.js');
app.use(logger);

//Ruta de Inicio
app.get('/', (req, res) => {
  res.send('"¡Bienvenido al servidor de Mueblería Jota!"');
});

// Middleware para Rutas No Encontradas (404)
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error); 
});

//
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});

//Manejador de Errores Centralizado
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message || 'Ha ocurrido un error en el servidor.',
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});