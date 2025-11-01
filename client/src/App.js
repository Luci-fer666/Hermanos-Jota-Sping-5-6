import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ProductosBody from './components/ProductosBody.js';
import ProductoIndividualBody from './components/ProductDetail.js';
import CarritoBody from './components/BodyCarrito.js';
import CrearProducto from './components/CrearProducto.js';
import ContactForm from './components/ContactForm.js';
import IndexBody from './components/BodyIndex.js';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
      const [productoSeleccionadoId, setProductoSeleccionadoId] = useState(null);
      const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (idProducto) => {
    setCarrito(prev => [...prev, idProducto]);};
    
    const verDetalleProducto = (id) => {
        setProductoSeleccionadoId(id);};
  
  return (
    <div className="App">
      <Navbar  contadorCuenta={carrito.length} />
      <Routes>
        <Route path="/" element={ <IndexBody verDetalleProducto={verDetalleProducto}/> } />
        <Route path="/productos" element={ <ProductosBody verDetalleProducto={verDetalleProducto}/> } />
        <Route path="/carrito" element={ <CarritoBody carrito={carrito} 
                      verDetalleProducto={verDetalleProducto}/> } />
        <Route path="/contacto" element={ <ContactForm /> } />
        <Route path='/producto/:id' element={ <ProductoIndividualBody id= {productoSeleccionadoId}
                       agregarAlCarrito={agregarAlCarrito} /> } />
        <Route path="/admin/crear-producto" element={ <CrearProducto/> } />
      </Routes>
      <Footer/> 
    </div>
  );}

export default App;
