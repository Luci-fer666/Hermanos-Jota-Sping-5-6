import './ProductCard.css';
function ProductCard({agregarAlCarrito, id, nombre, precio, descripcion, imagen, verDetalleProducto}) {
    return (<>
    <li className="producto-item">
        <img src={imagen} alt={imagen}/>
        <h3 id="nombre"
        onClick={() => verDetalleProducto(id)}
      >
          {nombre}</h3>
        <p className="precio-producto"><strong>ARS</strong> $ {precio}</p>
        <p className="descripcion-producto">{descripcion}</p>
        <button className="btn" onClick={() => {agregarAlCarrito(id);
                                              alert(`El producto "${nombre}" se agregó al carrito`);}}
                type="button" data-id={id}>
          Agregar al Carrito
        </button>
      </li>
    </>);
}
export default ProductCard;
