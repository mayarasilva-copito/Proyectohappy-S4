import "./quienessomos.css";
import { FaInstagram } from "react-icons/fa";


function Quienessomos() {
  return (
    <>
    <br />
      <div className="texto">
        {/* 🌸 NUESTRA HISTORIA */}
        <section id="historia" className="section_quienesomos historia-ampliada">
          <h2 className="section-title">🐾 Nuestra Historia</h2>
          <div className="historia-contenido">
            <div className="historia-texto">
              
              <p>
                Todo comenzó con un simple acto de amor. Un día, mientras caminábamos juntas,
                encontramos a un perrito herido que necesitaba ayuda. Sin pensarlo, decidimos
                rescatarlo y cuidarlo hasta que se recuperara. Ese momento cambió todo para nosotras.
              </p>

              <p>
                Desde entonces, <strong>Mayara, Alexandra y Melany</strong> unimos nuestras fuerzas
                y corazones para crear esta página: un espacio donde los animales puedan tener una
                segunda oportunidad y donde las personas encuentren inspiración para adoptar, ayudar
                o aprender más sobre el cuidado responsable.
              </p>

              <p>
                Con esfuerzo, cariño y muchas historias felices, seguimos creciendo cada día.
                Nuestra meta es construir una comunidad que ame, respete y proteja a los animales. 🐾💖
              </p>

              <h3>💫 Nuestras historias</h3>

              <p>
                <strong>🐱 Mayara:</strong> Desde niña recogía gatitos abandonados en su barrio.
                Hoy comparte su talento en marketing para dar visibilidad a cada rescate y mostrar
                que cada vida cuenta.
              </p>

              <p>
                <strong>🐶 Alexandra:</strong> Su primera experiencia fue alimentar a un perrito
                que vivía en la puerta de su colegio. Ese pequeño gesto despertó su vocación por
                ayudar a los animales.
              </p>

              <p>
                <strong>🐾 Melany:</strong> Adoptó a un perrito callejero que estaba asustado y sin
                confianza. Con paciencia y amor logró que recuperara la alegría, y desde entonces se
                dedica a apoyar a muchos más.
              </p>
            </div>

            <div className="historia-imagenes">
              <img src="./rescate.jpg" alt="Rescate de perrito" />
              <img src="./gatocalle.jpg" alt="Nosotras tres" />
              <img src="./felices.jpg" alt="Animales felices" />
            </div>
          </div>
        </section>

        {/* 🐶 MISIÓN Y VISIÓN */}
        <section id="mision-vision">
          <h2 className="section-title">Misión y Visión</h2>
          <div className="card-container mision-vision-separadas">
            <div className="card">
              <h3>Misión</h3>
              <p>
                Brindar refugio, cuidado y amor a perritos y gatitos en
                situación de calle, trabajando con la comunidad para ofrecerles
                un hogar seguro y lleno de cariño.
              </p>
              <div className="imagen-misionvision">
                <img src="./mision.png" alt="Misión" className="foto-miembro" />
              </div>
            </div>

            <div className="card">
              <h3>Visión</h3>
              <p>
                Convertirnos en una organización líder en rescate animal,
                logrando que cada mascota tenga un hogar digno y una vida plena,
                mientras inspiramos a la sociedad a ser más consciente y
                compasiva.
              </p>
              <div className="imagen-misionvision">
                <img src="./vvison.png" alt="Visión" className="foto-miembro" />
              </div>
            </div>
          </div>
        </section>

        {/* 🧡 NUESTRO EQUIPO */}
        <section id="equipo">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-cards">
            <div className="team-card">
              <h4>🐱 Mayara</h4>
              <p>
                <strong>Fundadora y líder del proyecto</strong>
              </p>
              <div className="redes">
                <a href="https://www.instagram.com/mayaramarelysilvaespinoza/" target="_blank">
                  <FaInstagram className="iconito" />
                </a>
              </div>
              
              <div className="imagenlogo">
                <img src="./maya.png" alt="Mayara" className="foto-miembro" />
              </div>
              <p>
              “Desde niña recogía gatitos sin saber que ese amor me llevaría tan lejos. Hoy, como fundadora del proyecto, entiendo que cada rescate comienza con un pequeño acto de empatía. Ver cómo una vida cambia gracias al amor nos recuerda por qué empezamos.” 💖
              </p>
            </div>

            <div className="team-card">
              <h4>🐶 Alexandra</h4>
              <p>
                <strong>Coordinadora de rescates</strong>
              </p>
              <div className="redes">
                <a href="https://www.instagram.com/shin_vvw/" target="_blank">
                 <FaInstagram className="iconito" />
                </a>
              </div>
              <div className="imagenlogo">
                <img src="./ale.png" alt="Alexandra" className="foto-miembro" />
              </div>
              <p>
                “Recuerdo aquel perrito frente a mi colegio; me enseñó que incluso un pequeño gesto puede transformar una vida. Ahora, cada rescate que organizamos me recuerda que la empatía no se mide por el tamaño del acto, sino por la sinceridad del corazón.” 🐾
              </p>
            </div>

            <div className="team-card">
              <h4>🐾 Melany</h4>
              <p>
                <strong>Cuidadora y entrenadora</strong>
              </p>
              <div className="redes">
                <a href="https://www.instagram.com/melx_tm09/" target="_blank">
                  <FaInstagram className="iconito" />
                </a>
              </div>
              <div className="imagenlogo">
                <img src="./melany.png" alt="Melany" className="foto-miembro" />
              </div>
              <p>
                “Cuando adopté a mi primer perrito callejero, aprendí que el amor y la paciencia curan más que cualquier medicina. Hoy, al cuidar a cada animal rescatado, veo cómo el miedo se convierte en confianza y la tristeza en esperanza. Eso me motiva a seguir.” 🐶💞
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Quienessomos;