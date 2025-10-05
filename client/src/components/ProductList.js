import './ProductList.css';
import ProductCard from './ProductCard.js';

function ProductList({productos, agregarAlCarrito}) {
    return (<>
        <ul id="lista-productos" className="product-grid" aria-live="polite">
          {productos.map(producto => (
            <ProductCard  
                agregarAlCarrito={agregarAlCarrito}
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