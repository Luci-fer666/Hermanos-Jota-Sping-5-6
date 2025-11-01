import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductoDetail({ id, agregarAlCarrito }) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const {id} = useParams
    const fetchProducto = async () => {
      try {
        const response = await fetch(`/products/${id}`);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }
        const data = await response.json();
        console.log("Producto recibido:", data);
        setProducto(data);
      } catch (err) {
        console.error("Error fetching producto:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProducto();
    }
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <main id="producto-individual">
      <div id="producto-caracteristicas-container">
        <h2>{producto.nombre}</h2>
        <img id="imagen" src={producto.imagen} alt={producto.nombre} />
        <div>
          <strong>Descripción:</strong> {producto.descripcion} 
        </div>
      </div>

      <div id="producto-caracteristicas">
        <h3 id="precio"><strong>Precio:</strong> $ {producto.precio}</h3>
        <div id="producto-detalle">
          <ul>
            <li><strong>Medidas:</strong> {producto.medidas}</li>
            <li><strong>Materiales:</strong> {producto.materiales}</li>
            <li><strong>Acabado:</strong> {producto.acabado}</li>
            <li><strong>Capacidad:</strong> {producto.capacidad}</li>
            <li><strong>Peso:</strong> {producto.peso}</li>
          </ul>
        </div>
        <button
          className="btn"
          type="button"
          data-id={producto.id}
          onClick={() => {
            agregarAlCarrito(producto.id);
            alert(`El producto "${producto.nombre}" se agregó al carrito`);
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </main>
  );
}

export default ProductoDetail;