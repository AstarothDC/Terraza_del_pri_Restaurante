import React, { useState } from 'react';
import './App.css';
import About from "./components/About";
import Specials from "./components/Specials";
import ChatBot from "./components/ChatBot";

function App() {
  const [submenuVisible, setSubmenuVisible] = useState(null);

  const menuItems = ['Hamburguesas', 'Salchipapas', 'Perros calientes', 'Salvajadas'];

  const handleItemClick = (item) => {
    setSubmenuVisible(submenuVisible === item ? null : item); // Toggle
  };

  const submenus = {
    'Hamburguesas': ['Clásica', 'BBQ', 'Doble carne', 'mixta'],
    'Salchipapas': ['Tradicional', 'Especial con queso', 'Mixta'],
    'Perros calientes': ['Sencillo', 'Con queso', 'Con todo'],
    'Salvajadas': ['Salvajada x2','Salvajada x4','Salvajada x5','Salvajada x7']
  };

  return (
    <div style={{ fontFamily: 'Arial', backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#000', color: '#ffcc00', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', margin: 0 }}>Restaurante Terraza del Pri</h1>
      </header>

      {/* Contenido principal */}
      <main className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px 20px' }}>
        
        {/* Menú lateral + Formulario */}
        <div style={{ display: 'flex', gap: '40px' }}>
          
          {/* Menú lateral izquierdo */}
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#000' }}>Menú</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    cursor: 'pointer',
                    color: submenuVisible === item ? '#000' : '#ffcc00',
                    backgroundColor: submenuVisible === item ? '#ffcc00' : '#000',
                    padding: '10px',
                    marginBottom: '8px',
                    borderRadius: '6px',
                    transition: '0.3s'
                  }}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {submenuVisible && (
              <div style={{ marginTop: '20px' }}>
                <h3 style={{ color: '#ffcc00' }}>{submenuVisible} disponibles</h3>
                <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                  {submenus[submenuVisible].map((subItem, i) => (
                    <li key={i} style={{ color: '#000', marginBottom: '5px' }}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Formulario de domicilio a la derecha */}
          <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#000' }}>Domicilio</h2>
            <form>
              <div className="mb-3" style={{ marginBottom: '15px' }}>
                <label htmlFor="nombre" style={{ color: '#000' }}>Nombre</label>
                <input type="text" id="nombre" className="form-control" placeholder="Tu nombre" />
              </div>
              <div className="mb-3" style={{ marginBottom: '15px' }}>
                <label htmlFor="direccion" style={{ color: '#000' }}>Dirección</label>
                <input type="text" id="direccion" className="form-control" placeholder="Dirección de entrega" />
              </div>
              <div className="mb-3" style={{ marginBottom: '15px' }}>
                <label htmlFor="telefono" style={{ color: '#000' }}>Teléfono</label>
                <input type="tel" id="telefono" className="form-control" placeholder="Teléfono de contacto" />
              </div>
              <div className="mb-3" style={{ marginBottom: '15px' }}>
                <label htmlFor="pedido" style={{ color: '#000' }}>¿Qué deseas ordenar?</label>
                <textarea id="pedido" className="form-control" rows="4" placeholder="Ej: 1 Hamburguesa BBQ, 1 Salchipapa especial..." />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#ffcc00',
                  color: '#000',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                Enviar pedido
              </button>
            </form>
          </div>
        </div>

        {/* Secciones nuevas */}
        <About />
        <Specials />
        <ChatBot />
      </main>

      <footer style={{ backgroundColor: '#f8f9fa', textAlign: 'center', padding: '15px' }}>
        <p style={{ color: '#000' }}>&copy; 2025 Restaurante Terraza del Pri</p>
      </footer>
    </div>
  );
}

export default App;
