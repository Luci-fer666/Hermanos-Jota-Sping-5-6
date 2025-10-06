import './ProductDetail.css';
function ProductoDetail({ producto }) {
	if (!producto) return <p>Producto no encontrado</p>;
    return (<>

    <main id="producto-individual">
			    <div id="producto-caracteristicas-container">
                    <h2>{producto.nombre}</h2>
                    <img id="imagen" src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <strong>Descripción:</strong> {producto.descripcion} 
                    </div>
                </div>

                <div id="producto-caracteristicas">
                    <h3 id="precio"><strong>Precio:</strong> $ {producto.precio}</h3>
                    <div id="producto-detalle">
                        <ul>
                            <li><strong>Medidas:</strong> {producto.medidas}</li>
                            <li><strong>Materiales:</strong> {producto.materiales}</li>
                            <li><strong>Acabado:</strong> {producto.acabado}</li>
                            <li><strong>Capacidad:</strong> {producto.capacidad}</li>
                            <li><strong>Peso:</strong> {producto.peso}</li>
                        </ul>
				    </div>
			    </div>
		</main>
    </>);
}
export default ProductoDetail;