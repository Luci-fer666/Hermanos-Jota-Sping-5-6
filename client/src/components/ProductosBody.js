import '../styles.css';
import ProductList from './ProductList';

function ProductosBody({ productos }) {
    return (<>
		<div className="background-main">
			<main className="catalogo" id="contenido">
				<ul id="lista-productos" className="product-grid" aria-live="polite">
                    <ProductList productos={productos} />
                </ul>
			</main>
		</div>
    </>);
}
export default ProductosBody;