// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section style={{ padding: "40px", backgroundColor: "#fff", borderRadius: "8px", marginTop: "20px" }}>
      <h2 style={{ color: "#000" }}>Nuestra Historia</h2>
      <p>
        Terraza del Pri nació como un pequeño negocio familiar de comida rápida,
        dedicado a ofrecer sabores auténticos con un toque casero. Con el tiempo,
        nos hemos convertido en un punto de encuentro para quienes disfrutan de
        hamburguesas, perros calientes y salchipapas.
      </p>
      <h3 style={{ color: "#ffcc00" }}>Datos curiosos</h3>
      <ul>
        <li>La salchipapa es uno de los platos más pedidos los fines de semana.</li>
        <li>El pan de nuestras hamburguesas es artesanal, horneado cada mañana.</li>
        <li>Muchos clientes nos acompañan desde hace más de 3 años.</li>
      </ul>
    </section>
  );
};

export default About;
