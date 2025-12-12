import React from "react";
import "./novedades.css";

function Novedades() {
  return (
    <div className="nov-container">

      {/* Banner principal */}
      <div className="nov-banner">
        <h1>🐾 ¡Adopta Amor Hoy! 💖</h1>
        <p>
          Cada mascota merece una segunda oportunidad. Descubre nuestras campañas,
          nuevas historias y formas de apoyar a nuestros amigos peludos.
        </p>
        <a href="/Mascotas" className="nov-cta">Ver Mascotas</a>
      </div>

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

      {/* Mini sección extra */}
      <div className="nov-mini">
        <h3>🐶 “Adopta, no compres”</h3>
        <p>
          Cuando adoptas, salvas vidas, das amor y recibes una amistad para siempre.
        </p>
      </div>
    </div>
  );
}

export default Novedades;
