import './ProductList.css';
import ProductCard from './ProductCard.js';

function ProductList({productos, verDetalleProducto}) {
    return (<>
        <ul id="lista-productos" className="product-grid" aria-live="polite">
          {productos.map(producto => (
            <ProductCard 
                verDetalleProducto={verDetalleProducto} 
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                descripcion={producto.descripcion}
                imagen={producto.imagen}
              />))}
        </ul>
    </>);
}
export default ProductList;