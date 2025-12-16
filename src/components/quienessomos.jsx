import "./quienessomos.css";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Quienessomos() {
  const navigate = useNavigate();
  const carruselRef = useRef(null);

  const handleAdoptar = () => {
    navigate("/mascotas");
  };

  useEffect(() => {
    const container = carruselRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    // 🌊 auto scroll infinito suave
    const autoScroll = () => {
      container.scrollLeft += 0.3;

      if (
        container.scrollLeft >=
        container.scrollWidth / 2
      ) {
        container.scrollLeft = 0;
      }
      requestAnimationFrame(autoScroll);
    };
    autoScroll();

    // 🖱️ drag con mouse
    container.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseup", () => (isDown = false));
    container.addEventListener("mouseleave", () => (isDown = false));

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.2;
      container.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <div className="quienes-container">

      {/* ================= QUIÉNES SOMOS ================= */}
      <section className="historia-ampliada">
        <h2 className="section-title">💗 Quiénes Somos</h2>

        <div className="parrafo-historia">
          <p>
            Somos <strong>Mayara, Alexandra y Melany</strong>, un equipo unido por
            el amor a los animales y el compromiso de cambiar la realidad de
            perritos y gatitos en situación de abandono.
          </p>
        </div>

        <div className="parrafo-historia">
          <p>
            Creamos esta página con el objetivo de rescatar, cuidar y encontrar
            hogares responsables para cada mascota, fomentando la empatía,
            el respeto y la adopción consciente. 🐾
          </p>
        </div>
      </section>

      {/* ================= HISTORIA ================= */}
      <section className="historia-ampliada">
        <h2 className="section-title">🐾 Nuestra Historia</h2>

        <div className="historia-contenido">
          <div className="texto-historia">

            <div className="parrafo-historia">
              <p>
                Todo comenzó con un simple acto de amor. Un día, mientras caminábamos
                juntas, encontramos a un perrito herido que necesitaba ayuda.
                Decidimos rescatarlo sin imaginar que ese momento cambiaría nuestras vidas.
              </p>
            </div>

            <div className="parrafo-historia">
              <p>
                Desde entonces, hemos trabajado con esfuerzo y cariño para ayudar
                a más animales, creando una comunidad que cree en las segundas
                oportunidades y en el amor incondicional. 💖
              </p>
            </div>

          </div>

          {/* ===== CARRUSEL ===== */}
          <div
            className="imagenes-historia carrusel-historia"
            ref={carruselRef}
          >
            <div className="carrusel-track">
              <img src="./rescate.jpg" alt="Rescate" />
              <img src="./gatocalle.jpg" alt="Gatito" />
              <img src="./felices.jpg" alt="Animales felices" />
              <img src="./adopta2.webp" alt="Rescate" />
              <img src="./adopta1.jpg" alt="Gatito" />

              {/* duplicadas manualmente (seguro en React) */}
              <img src="./rescate.jpg" alt="" />
              <img src="./gatocalle.jpg" alt="" />
              <img src="./felices.jpg" alt="" />
              <img src="./adopta2.webp" alt="" />
              <img src="./adopta1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISIÓN Y VISIÓN ================= */}
      <section className="mision-vision-separadas">

        <div className="card-mv">
          <h3>Misión</h3>
          <p>
            Rescatar, proteger y brindar cuidado integral a perritos y gatitos
            en situación de calle, promoviendo la adopción responsable y el
            amor por los animales.
          </p>
          <img src="./mision.png" alt="Misión" />
        </div>

        <div className="card-mv">
          <h3>Visión</h3>
          <p>
            Ser una comunidad referente en rescate animal, donde cada mascota
            tenga un hogar digno y una vida llena de amor.
          </p>
          <img src="./vvison.png" alt="Visión" />
        </div>

      </section>

      {/* ================= EQUIPO ================= */}
      <section className="equipo">
        <h2 className="section-title">Nuestro Equipo</h2>

        <div className="grid-equipo">

          <div className="team-card">
            <h4>🐱 Mayara</h4>
            <p><strong>Fundadora</strong></p>
            <div className="redes">
              <a href="https://www.instagram.com/mayaramarelysilvaespinoza/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
            <img src="./maya.png" alt="Mayara" className="foto-miembro" />
            <p>“Cada rescate comienza con empatía.”</p>
          </div>

          <div className="team-card">
            <h4>🐶 Alexandra</h4>
            <p><strong>Rescates</strong></p>
            <img src="./ale.png" alt="Alexandra" className="foto-miembro" />
            <p>“La empatía se demuestra con acciones.”</p>
          </div>

          <div className="team-card">
            <h4>🐾 Melany</h4>
            <p><strong>Cuidado animal</strong></p>
            <img src="./melany.png" alt="Melany" className="foto-miembro" />
            <p>“El amor transforma vidas.”</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-final">
        <h2>¿Quieres ayudar a adoptar?</h2>
        <button onClick={handleAdoptar}>Quiero Adoptar</button>
      </section>

    </div>
  );
}

export default Quienessomos;
