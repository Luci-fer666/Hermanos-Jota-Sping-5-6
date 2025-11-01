import './BodyCarrito.css';
import ProductCard from './ProductCard';
import React, { useState, useEffect } from 'react';

function CarritoBody({carrito, verDetalleProducto}) {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
	const fetchProducts = async () => {
	  try {
		const response = await fetch('/api/productos');
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

	const productosEnCarrito = productos.filter(p => carrito.includes(p.id));
    return (<>
    	<main className="contenido">
			<div className="background-main">
				<h1>Carrito de compras</h1>
				{productosEnCarrito.length === 0 && <p>No hay productos en el carrito.</p>}
				<section className="resumen-carrito">
					<ul id="carrito-lista" className="carrito-grid" aria-live="polite">
					{productosEnCarrito.map(producto => (
						<ProductCard  
							verDetalleProducto={verDetalleProducto}
							id={producto.id}
							nombre={producto.nombre}
							precio={producto.precio}
							descripcion={producto.descripcion}
							imagen={producto.imagen}/>
						))}
					</ul>

					<div className="total">
						<p>Total: <strong>
							<span id="carrito-total">
								ARS $
								{productosEnCarrito.reduce((total, p) => total + p.precio, 0)}
							</span></strong>
						</p>
						<button id="vaciar-carrito" className="btncar">Vaciar carrito</button>
					</div>
				</section>
			</div>
		</main>
    </>);
}
export default CarritoBody;