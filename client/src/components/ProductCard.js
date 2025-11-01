import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({id, nombre, precio, descripcion, imagen}) {
    return (
    <li className="producto-item">
      <Link to={`/producto/${id}`}>
        <img src={imagen} alt={nombre}/>
      </Link>
        
      <Link to={`/producto/${id}`}>
        <h3 className="nombre-producto">
          {nombre}
        </h3>
      </Link>
      <p className="precio-producto"><strong>ARS</strong> $ {precio}</p>
      <p className="descripcion-producto">{descripcion}</p>
    </li>
  );
}
export default ProductCard;
