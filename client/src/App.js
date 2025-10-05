import './styles.css';
import Navbar from './/components/Navbar.js';
import Footer from './components/Footer.js';
import { productos } from '../src/productos.js';
import ProductosBody from './components/ProductosBody.js';
import ProductoBody from './components/ProductoBody.js';
import CarritoBody from './components/BodyCarrito.js';
import ContactForm from './components/ContactForm.js';
import IndexBody from './components/BodyIndex.js';
import React, { useState } from 'react';


function App() {
      const [vistaActual, setVistaActual] = useState('inicio');
      const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (idProducto) => {
    setCarrito(prev => [...prev, idProducto]);
  };
  return (
    <div className="App">
        <Navbar  
        inicio={() =>  setVistaActual('inicio')}
        productos ={() => setVistaActual('productos')}
        contactos ={() => setVistaActual('producto')}
        carrito ={() => setVistaActual('carrito')}
        contadorCarrito={carrito.length}
        carritoCuenta ={() => setVistaActual('contacto')}
        />

      {vistaActual === 'inicio' && <IndexBody />}
      {vistaActual === 'productos' && <ProductosBody 
                                      productos={productos}
                                      agregarAlCarrito={agregarAlCarrito} />}
      {vistaActual === 'producto' && <ProductoBody />}
      {vistaActual === 'carrito' && <CarritoBody 
                                      carrito={carrito} 
                                      agregarAlCarrito={agregarAlCarrito}
                                      productos={productos} />}
      {vistaActual === 'contacto' && <ContactForm />}

        <Footer /> 
    </div>
  );}

export default App;
