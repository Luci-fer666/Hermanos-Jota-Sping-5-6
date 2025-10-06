import './ProductCard.css';
function ProductCard({id, nombre, precio, descripcion, imagen, verDetalleProducto}) {
    return (<>
    <li className="producto-item">
        <img src={imagen} alt={imagen}/>
        <h3 id="nombre"
        onClick={() => verDetalleProducto(id)}
      >
          {nombre}</h3>
        <p className="precio-producto"><strong>ARS</strong> $ {precio}</p>
        <p className="descripcion-producto">{descripcion}</p>
      </li>
    </>);
}
export default ProductCard;
