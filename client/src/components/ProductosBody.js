import './ProductosBody.css';
import ProductList from './ProductList.js';

function ProductosBody({ productos, verDetalleProducto}) {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList 
					productos={productos}  
					verDetalleProducto={verDetalleProducto}
					/>
			</div>
		</div>
    </>);
}
export default ProductosBody;