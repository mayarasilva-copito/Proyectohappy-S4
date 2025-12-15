import React from "react";
import "./novedades.css";

function Novedades() {
  return (
    <div className="nov-container">


      {/* Sección de campaña */}
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
    </div>
  );
}

export default Novedades;
