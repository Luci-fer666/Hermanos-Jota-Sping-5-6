import './ProductosBody.css';
import ProductList from './ProductList.js';

function ProductosBody() {
    return (<>
		<div className="background-main">
			<div className="catalogo" id="contenido">
                <ProductList/>
			</div>
		</div>
    </>);
}
export default ProductosBody;