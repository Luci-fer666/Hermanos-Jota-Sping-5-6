import '../styles.css';
import ProductCard from './ProductCard';

function ProductList({productos, agregarAlCarrito}) {
    return (<>
        <ul>
        {productos.map(producto => (
        <ProductCard  
          agregarAlCarrito={agregarAlCarrito}
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