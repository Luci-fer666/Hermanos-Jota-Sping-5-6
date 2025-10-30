import './ProductosBody.css';
import ProductList from './ProductList.js';

function ProductosBody({verDetalleProducto}) {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList  
					verDetalleProducto={verDetalleProducto}
					/>
			</div>
		</div>
    </>);
}
export default ProductosBody;