// src/components/Specials.js
import React from "react";

const Specials = () => {
  const specials = [
    {
      name: "Hamburguesa BBQ",
      description:
        "Una deliciosa hamburguesa con carne a la parrilla, salsa BBQ especial y pan artesanal recién horneado.",
      image: "/images/hamburguesa_bbq.png"  // 👈 asegúrate que exista en /public/images
    },
    {
      name: "Salchipapa Especial",
      description:
        "La clásica salchipapa con un toque especial: queso fundido, salsas caseras y papas crujientes.",
      image: "/images/salchipapa_especial.jpg"  // 👈 funciona porque ya lo probaste en el navegador
    },
    {
      name: "Perro Caliente Mixto",
      description:
        "Perro caliente con una combinación única de sabores: salchicha especial, queso, salsas y toques caseros.",
      image: "/images/perro_caliente.png"  // 👈 asegúrate que exista en /public/images
    }
  ];

  return (
    <section
      style={{
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        marginTop: "20px"
      }}
    >
      <h2 style={{ color: "#000", marginBottom: "20px" }}>Platos Destacados</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {specials.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px"
              }}
            />
            <h3 style={{ color: "#ffcc00" }}>{item.name}</h3>
            <p style={{ color: "#000" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
