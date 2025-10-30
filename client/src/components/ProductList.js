import './ProductList.css';
import ProductCard from './ProductCard.js';
import React, { useState, useEffect } from 'react';

function ProductList({verDetalleProducto}) {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products');
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }
        const data = await response.json();
        console.log("Productos recibidos:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError(err);
      } finally {
        setLoading(false);
      } };
    fetchProducts(); }, []);
  if (loading) {
    return <p>Cargando productos...</p>; }
  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>; }

    return (<>
        <ul id="lista-productos" className="product-grid" aria-live="polite">
          {productos.map(producto => (
            <ProductCard 
                verDetalleProducto={verDetalleProducto} 
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                descripcion={producto.descripcion}
                imagen={producto.imagen}
              />))}
        </ul>
    </>);
}
export default ProductList;