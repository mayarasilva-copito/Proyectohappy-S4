import './portada.css'
function Portada() {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>“Cada patita merece un hogar lleno de cariño.”</h1>
          <p>
            Detrás de cada mirada hay una historia que pide una segunda oportunidad. Muchos han esperado por tanto tiempo sentir un abrazo, una voz amable, un lugar donde pertenecer.
Tal vez hoy seas tú quien convierta su esperanza en un hogar… y su tristeza en una vida llena de amor.
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

              <div className="seccion-dedicamos">
  <h2>¡A Qué Nos Dedicamos!</h2>

  <p>
    Cada año, cientos de perros y gatos son abandonados o viven en situaciones difíciles. 
    Aunque no siempre se conoce la cifra exacta, se estima que muchos más de los que imaginamos 
    necesitan ayuda urgente. Gracias al trabajo constante de nuestro equipo y al apoyo de la comunidad, 
    hemos logrado rescatar a decenas de peluditos que hoy tienen una nueva oportunidad. 
    Cada uno representa una vida cambiada y un paso más hacia un mundo donde los animales 
    reciben el amor y el respeto que merecen. Seguimos trabajando con dedicación para que cada vez 
    más animales abandonados puedan ser rescatados, curados y adoptados, construyendo un futuro 
    donde nunca más tengan que sufrir.
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
