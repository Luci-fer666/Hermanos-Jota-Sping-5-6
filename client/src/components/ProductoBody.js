import '../styles.css';
function ProductoBody() {
    return (<>
    <main id="producto-individual">
			<div id="producto-detalle"></div>
			<div id="producto-caracteristicas-container">
				<ul id="producto-caracteristicas"></ul>
			</div>
		</main>
		<script src="assets/js/common.js"></script>   
		<script src="assets/js/productos.js"></script>
		<script src="assets/js/producto.js"></script>  

    </>);
}
export default ProductoBody;