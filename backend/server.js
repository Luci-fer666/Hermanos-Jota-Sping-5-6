const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const { notFound, errorHandlerServer } = require('./middleware/errorHandlers');

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

// END POINT 1: Obtener productos
app.get('/api/productos', async (req, res, next) => {
  try {
    const productos = await Producto.find({});
    res.status(200).json(productos);
  } catch (error) {
    consola.error('Error al obtener los productos: ', error.message);
    next(error);
  }
})

// END POINT 2: Obtener un producto con su ID
app.get('/api/productos/:id', async (req, res, next) => {
  try {
    const productoId = req.params.id // id que crea automaticamente la base de datos
    const producto = await Producto.findById(productoId);
    
    // si no se encuentra el producto
    if (!producto) {
      const error = new Error('Producto no encontrado');
      error.status = 404;
      return next(error); // termina en el manejador de errores
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al buscar producto por su ID: ', error.message);
    error.status = 400;
    next(error);
  }
})

// -----------------
// MANEJO DE ERRORES

// Middleware para rutas no encontradas (404)
app.use(notFound);

// Middleware de manejo de errores
app.use(errorHandlerServer);


// ----------------

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});