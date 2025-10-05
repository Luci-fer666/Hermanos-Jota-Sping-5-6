import './ProductosBody.css';
import ProductList from './ProductList.js';

function ProductosBody({ productos, agregarAlCarrito }) {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList 
					productos={productos}  
					agregarAlCarrito={agregarAlCarrito} />
			</div>
		</div>
    </>);
}
export default ProductosBody;