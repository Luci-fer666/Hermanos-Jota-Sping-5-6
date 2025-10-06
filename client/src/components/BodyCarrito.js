import './BodyCarrito.css';
import ProductCard from './ProductCard';

function CarritoBody({productos, carrito, verDetalleProducto}) {
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