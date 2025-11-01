import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ProductosBody from './components/ProductosBody.js';
import ProductoIndividualBody from './components/ProductDetail.js';
import CarritoBody from './components/BodyCarrito.js';
import ContactForm from './components/ContactForm.js';
import IndexBody from './components/BodyIndex.js';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (idProducto) => {
    setCarrito(prev => [...prev, idProducto]);};
    
    
  
  return (
    <div className="App">
      <Navbar  contadorCuenta={carrito.length} />
      <Routes>
        <Route path="/" element={ <IndexBody/> } />
        <Route path="/productos" element={ <ProductosBody/> } />
        <Route path="/carrito" element={ <CarritoBody carrito={carrito} 
                      verDetalleProducto={verDetalleProducto}/> } />
        <Route path="/contacto" element={ <ContactForm /> } />
        <Route path="/producto/:id" element={ <ProductoIndividualBody agregarAlCarrito={agregarAlCarrito} /> } />
      </Routes>
      <Footer/> 
    </div>
  );}

export default App;
