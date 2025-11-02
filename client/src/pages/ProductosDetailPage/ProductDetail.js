import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

function ProductoDetail({ agregarAlCarrito }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://hermanos-jota-sping-5-6.onrender.com/api/productos/${id}`);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria D:');
        }
        const data = await response.json();
        console.log("Producto recibido:", data);
        setProducto(data);
      } catch (err) {
        console.error("Error fetching producto :c :", err);
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

  const EliminarProducto = async () => {
    if (!window.confirm(`¿Seguro que querés este producto super cool llamado: "${producto.nombre}"?`)) return;
    try {
    const response = await fetch(`https://hermanos-jota-sping-5-6.onrender.com/api/productos/${producto._id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el producto D:');
    }

    alert(`"${producto.nombre}" fue eliminado correctamente. :c `);
    navigate('/productos');
  } catch (err) {
    console.error("Error eliminando el producto:", err);
    alert("Ocurrió un error al intentar eliminar el producto.");
  }
};
  return (
    <main id="producto-individual">
      <div id="producto-caracteristicas-container">
        <h2>{producto.nombre}</h2>
        <img id="imagen" src={producto.imagenUrl} alt={producto.nombre} />
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
            <li><strong>Mas Caracteristicas:</strong> {producto.masCaracteristicas} </li>
          </ul>
        </div>
        <button
          className="btn"
          type="button"
          data-id={producto._id}
          onClick={() => {
            agregarAlCarrito(producto._id);
            alert(`El producto "${producto.nombre}" se agregó al carrito`);
          }}
        >
          Agregar al Carrito
        </button>
        <button
          onClick={EliminarProducto}
          className="btn"
          type="button"
          data-id={producto._id}>
          Eliminar Producto
        </button>
      </div>
    </main>
  );
}

export default ProductoDetail;