import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CrearProducto.css';

function CrearProducto() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagenUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Datos a enviar:", formData);
 
    try {
      const response = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error('La creacion falló.');
      }
      const result = await response.json();
      alert(`¡Creacion exitosa para ${result.nombre}`);
      
      setFormData({ nombre: '', descripcion: '', precio: '', imagenUrl: ''});
      //navigate(`/producto/${result._id}`);
      navigate("/productos")
 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="form-crear-producto" onSubmit={handleSubmit}>
      <h3 className="form-titulo">Crear nuevo producto</h3>

      <div className="form-grupo">
        <label htmlFor="nombre">Nombre del producto</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej: Silla cuantica"
          className="form-input"
          required
        />
      </div>

        <div className="form-grupo">
        <label htmlFor="imagenUrl">imagenUrl</label>
        <input
          type="url"
          id="imagenUrl"
          name="imagenUrl"
          value={formData.imagenUrl}
          onChange={handleChange}
          placeholder="htttp://localhost:3000/"
          className="form-input"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="descripcion">Descripción</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Breve descripción del producto"
          className="form-input"
        />
      </div>

      <div className="form-grupo">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Ej: 1500"
          className="form-input"
          required
        />
      </div>

      <button type="submit" className="btn-enviar">
        Crear Producto
      </button>
    </form>
  );
}

export default CrearProducto;