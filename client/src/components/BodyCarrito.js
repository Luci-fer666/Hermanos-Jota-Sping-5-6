import '../styles.css';
function CarritoBody() {
    return (<>
    		<main className="contenido">
			<h1>Carrito de compras</h1>

			<section className="resumen-carrito">
				<ul id="carrito-lista" className="carrito-grid" aria-live="polite"></ul>

				<div className="total">
					<p>Total: <strong><span id="carrito-total">ARS $0</span></strong></p>
					<button id="vaciar-carrito" className="btn danger">Vaciar carrito</button>
				</div>
			</section>
		</main>
    </>);
}
export default CarritoBody;