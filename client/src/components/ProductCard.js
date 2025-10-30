import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({id, nombre, precio, descripcion, imagen, verDetalleProducto}) {
    return (<>
    <li className="producto-item">
        <img src={imagen} alt={imagen}/>
        <Link to="/producto/:id"><h3 id="nombre"
        onClick={() => verDetalleProducto(id)}
      >
          {nombre}</h3></Link>
        <p className="precio-producto"><strong>ARS</strong> $ {precio}</p>
        <p className="descripcion-producto">{descripcion}</p>
      </li>
    </>);
}
export default ProductCard;
