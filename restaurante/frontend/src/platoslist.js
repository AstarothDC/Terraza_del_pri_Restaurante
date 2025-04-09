// src/components/PlatosList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlatosList = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/platos/')
      .then(res => setPlatos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Platos</h1>
      <ul>
        {platos.map(plato => (
          <li key={plato.id}>{plato.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlatosList;
