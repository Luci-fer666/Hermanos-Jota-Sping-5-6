import '../styles.css';
import ProductCard from './ProductCard';

function ProductList({productos}) {
    return (<>
        <ul>
        {productos.map(producto => (
        <ProductCard   
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          descripcion={producto.descripcion}
          imagen={producto.imagen}
            />
      ))}</ul>
    </>);
}
export default ProductList;