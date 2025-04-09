// src/components/Platos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Platos.css'; // Estilos externos

const Platos = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/platos/')
      .then(response => setPlatos(response.data))
      .catch(error => console.error('Error al obtener los platos:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">La Terraza del Pri</h1>
      <h2 className="subtitle">Nuestro menú</h2>
      <div className="platos-grid">
        {platos.map(plato => (
          <div key={plato.id} className="plato-card">
            <h3>{plato.nombre}</h3>
            <p><strong>Descripción:</strong> {plato.descripcion}</p>
            <p><strong>Precio:</strong> ${plato.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platos;
