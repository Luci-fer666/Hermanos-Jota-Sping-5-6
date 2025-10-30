import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { productos } from '../src/productos.js';
import ProductosBody from './components/ProductosBody.js';
import ProductoIndividualBody from './components/ProductDetail.js';
import CarritoBody from './components/BodyCarrito.js';
import ContactForm from './components/ContactForm.js';
import IndexBody from './components/BodyIndex.js';
import React, { useState } from 'react';



function App() {
      const [vistaActual, setVistaActual] = useState('inicio');
      const [productoSeleccionadoId, setProductoSeleccionadoId] = useState(null);
      const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (idProducto) => {
    setCarrito(prev => [...prev, idProducto]);};
    
    const verDetalleProducto = (id) => {
        setProductoSeleccionadoId(id);
        setVistaActual('producto');};
  
  return (
    <div className="App">
        <Navbar  
          inicio={() =>  setVistaActual('inicio')}
          productos ={() => setVistaActual('productos')}
          contactos ={() => setVistaActual('contacto')}
          carrito ={() => setVistaActual('carrito')}
          contadorCuenta={carrito.length}
        />

      {vistaActual === 'inicio' && <IndexBody
                                      productos={productos}
                                      verDetalleProducto={verDetalleProducto}/>}
      {vistaActual === 'productos' && <ProductosBody 
                                      productos={productos}
                                      verDetalleProducto={verDetalleProducto}/>}
      {vistaActual === 'carrito' && <CarritoBody 
                                      carrito={carrito} 
                                      verDetalleProducto={verDetalleProducto}
                                      productos={productos} />}
      {vistaActual === 'contacto' && <ContactForm />}
      {vistaActual === 'producto' && ( <ProductoIndividualBody
                                      id= {productoSeleccionadoId}
                                      agregarAlCarrito={agregarAlCarrito} />)}
        <Footer 
          inicio={() =>  setVistaActual('inicio')}
          productos ={() => setVistaActual('productos')}
          contactos ={() => setVistaActual('contacto')}
        /> 
    </div>
  );}

export default App;
