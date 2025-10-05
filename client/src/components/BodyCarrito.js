import '../styles.css';
import ProductCard from './ProductCard';

function CarritoBody({productos, carrito, agregarAlCarrito}) {
	const productosEnCarrito = productos.filter(p => carrito.includes(p.id));
    return (<>
    		<main className="contenido">
			<h1>Carrito de compras</h1>
			{productosEnCarrito.length === 0 && <p>No hay productos en el carrito.</p>}
			<section className="resumen-carrito">
				
				<ul id="carrito-lista" className="carrito-grid" aria-live="polite">
        		{productos.map(producto => (
        		<ProductCard  
				agregarAlCarrito={agregarAlCarrito}
				id={producto.id}
				nombre={producto.nombre}
				precio={producto.precio}
				descripcion={producto.descripcion}
				imagen={producto.imagen}/>
				))}</ul>

				<div className="total">
					<p>Total: <strong><span id="carrito-total">ARS $0</span></strong></p>
					<button id="vaciar-carrito" className="btn danger">Vaciar carrito</button>
				</div>
			</section>
		</main>
    </>);
}
export default CarritoBody;