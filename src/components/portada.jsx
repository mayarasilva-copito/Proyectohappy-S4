import './portada.css'
function Portada() {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>happy tails</h1>
          <p>
            En cada mirada de un perrito o un gatito hay una historia de
            esperanza. Muchos de ellos han vivido en las calles, enfrentando el
            frío, el hambre y la soledad. Pero cada uno guarda en su corazón un
            deseo: encontrar un hogar donde puedan sentirse amados y seguros.
            Adoptar no es solo abrir las puertas de tu casa, es abrir tu corazón
            a una vida que, con tan poco, te dará todo su amor incondicional.
            Cada adopción cambia dos vidas: la del animal que encuentra a su
            familia, y la tuya, al descubrir la alegría de tener un amigo fiel
            para siempre. Sé parte de este acto de amor, dales la oportunidad de
            empezar una nueva historia a tu lado.
          </p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <h1 className="heading">
            <span></span>
            Nosotros
          </h1>

          <div className="row">
            <div className="imagen-content">
              <div className="imagenprincipal">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/037/749/711/non_2x/ai-generated-dog-and-cat-on-transparent-background-free-png.png"
                  alt="imagenprincipal"
                />
              </div>

              <div className="text-container">
                <h3>¡A que nos dedicamos!</h3>
                <p>
                  Somos cuatro chicas unidas por un mismo sueño: cambiar la vida
                  de los animales que no tienen voz. Desde el inicio, decidimos
                  crear esta organización con una meta clara: promover la
                  adopción responsable y recordarle al mundo que la mejor
                  elección siempre será adoptar, no comprar. Nos mueve el amor
                  profundo por los perros y gatos que esperan un hogar, y
                  creemos firmemente que cada uno merece una segunda
                  oportunidad. Cada rescate que realizamos representa una vida
                  salvada, una historia que cambia, y un paso más hacia un mundo
                  más justo y compasivo para todos los seres vivos. Nuestra
                  labor no termina al encontrarles un hogar; seguimos
                  acompañando a cada familia para asegurar que la adaptación sea
                  feliz y duradera.
                </p>
                <p>
                  Juntas trabajamos para rescatarlos de situaciones de abandono
                  o maltrato, brindarles cuidados médicos, alimento y, sobre
                  todo, mucho cariño, mientras buscamos familias que los amen y
                  respeten para siempre. Además, realizamos campañas educativas
                  para concientizar sobre el bienestar animal y la importancia
                  de la esterilización, con el objetivo de reducir el abandono.
                  Esta es solo la primera página de nuestra historia, pero con
                  cada huella que dejamos sabemos que estamos construyendo un
                  futuro donde más animales tengan la vida feliz que merecen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Portada
