require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Producto = require('./DB/models/Product');
const { notFound, errorHandlerServer } = require('./middleware/errorHandlers');
const PORT = process.env.PORT || 4000;

const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL).then(() => console.log('Conexión exitosa a MongoDB Atlas :)')).catch(err => console.error('Error al conectarse a MongoDB Atlas: ', err));

// Middleware global para parsear JSON
app.use(express.json());

// para que se pueda enlazar con vercel
app.use(cors());

// Logger de peticiones
const logger = require('./logger');
app.use(logger);

// Routers
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');

app.use('/users', userRoutes);
app.use('/productos', productRoutes);

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
    res.status(200).json(producto);
  } catch (error) {
    console.error('Error al buscar producto por su ID: ', error.message);
    error.status = 400;
    next(error);
  }
})

// END POINT 3: Crear nuevo producto
app.post('/api/productos', async (req, res, next) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json({message: 'Producto creado', producto: productoGuardado});
  } catch (error) {
    error.status = 400;
    next(error);
  }
});

// END POINT 4: Actualizar datos de un producto por su id
app.put('/api/productos/:id', async (req, res, next) => {
  try {
    const productoId = req.params.id;
    const datosActualizados = req.body;

    const productoActualizado = await Producto.findByIdAndUpdate(productoId, datosActualizados, {new: true, runValidators: true});

    // si no encuentra el producto, no se actualiza
    if (!productoActualizado) {
      const error = new Error('Producto no encontrado para actualizar');
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      message: 'Producto actualizado con exito!',
      producto: productoActualizado
    });
  } catch (error) {
    console.error('Error al actualizar producto: ', error.message);
    error.status = 400;
    next(error);
  }
});

// END POINT 5: Borrar producto por su ID
app.delete(('/api/productos/:id'), async (req, res, next) => {
  try {
    const productoId = req.params.id;
    const productoEliminado = await Producto.findByIdAndDelete(productoId);

    if (!productoEliminado) {
      const error = new Error('No se encontró el producto a eliminar.');
      error.status(404);
      return next(error);
    }

    res.status(200).json({
      message: 'Producto eliminado con exito!',
      producto: productoEliminado
    });
  } catch (error) {
    console.error('Error al eliminar producto.');
    error.status = 400;
    next(error);
  }
});

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