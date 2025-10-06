import './ProductosBody.css';
import ProductList from './ProductList.js';

function ProductosBody({ productos, agregarAlCarrito , verDetalleProducto}) {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList 
					productos={productos}  
					agregarAlCarrito={agregarAlCarrito} 
					verDetalleProducto={verDetalleProducto}
					/>
			</div>
		</div>
    </>);
}
export default ProductosBody;