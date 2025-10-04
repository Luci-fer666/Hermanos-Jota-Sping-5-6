import '../styles.css';
function ProductCard({id, nombre, precio, descripcion, imagen}) {
    return (<>
    <li className="producto-item">
        <img src={imagen} alt="{nombre}"/>
        <h3><a href="producto.html">{nombre}</a></h3>
        <p className="precio-producto"><strong>ARS</strong> $${precio}</p>
        <p className="descripcion-producto">{descripcion}</p>
        <button className="btn primary add-to-cart" type="button" data-id={id}>
          Agregar al Carrito
        </button>
      </li>
    </>);
}
export default ProductCard;
