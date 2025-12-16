import React from "react";
import "./novedades.css";

function Novedades() {
  return (
    <div className="nov-container">

      {/* ================= CAMPAÑA ================= */}
      <div className="nov-section">
        <h2>✨ Campaña: “Un Hogar para Cada Huellita” ✨</h2>
        <p>
          Con esta campaña queremos dar visibilidad a perros y gatos que buscan un hogar.
          Nuestro objetivo es conectar a las familias con su compañero ideal.
        </p>

        <ul className="nov-list">
          <li>📸 Historias reales de adopción</li>
          <li>🎀 Mascotas destacadas de la semana</li>
          <li>📢 Consejos para adoptar responsablemente</li>
          <li>💌 Mensajes de nuevos dueños</li>
        </ul>
      </div>

      {/* ================= PRODUCTOS SOLIDARIOS ================= */}
      <div className="nov-section">
        <h2>🐾 Productos solidarios</h2>
        <p>
          Al adquirir estos productos, apoyas directamente el rescate,
          cuidado y alimentación de nuestros animalitos 🐶🐱💖
        </p>

        <div className="nov-cards">

          {/* CARD ACCESORIOS */}
          <div className="nov-card">
            <img src="./accesorios.jpg" alt="Accesorios para mascotas" />
            <h3>🎀 Accesorios para mascotas</h3>
            <p>
              Collares, correas, platos y accesorios pensados para la comodidad
              y seguridad de tu mascota.
            </p>
            <span className="nov-tag">Compra con causa 💕</span>
          </div>

          {/* CARD COMIDA */}
          <div className="nov-card">
            <img src="./comida.jpg" alt="Comida para mascotas" />
            <h3>🥣 Alimento para mascotas</h3>
            <p>
              Comida balanceada para perros y gatos.
              Cada compra nos ayuda a seguir rescatando más vidas.
            </p>
            <span className="nov-tag">Ayudas a nuestros rescatados 🐾</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Novedades;
