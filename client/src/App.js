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
  return (
    <div className="App">
        <Navbar  
        inicio={() =>  setVistaActual('inicio')}
        productos ={() => setVistaActual('productos')}
        contactos ={() => setVistaActual('producto')}
        carrito ={() => setVistaActual('carrito')}
        carritoCuenta ={() => setVistaActual('contacto')}
        />

      {vistaActual === 'inicio' && <IndexBody />}
      {vistaActual === 'productos' && <ProductosBody productos={productos} />}
      {vistaActual === 'producto' && <ProductoBody />}
      {vistaActual === 'carrito' && <CarritoBody />}
      {vistaActual === 'contacto' && <ContactForm />}

        <Footer /> 
    </div>
  );}

export default App;
