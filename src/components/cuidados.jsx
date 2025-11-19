import "./cuidados.css";
import datos from "../data/cuidados.json";


function Cuidados() {
  return (
    <div className="contenedor-cuidados">
      <h1 className="titulo-general">💖 Cuidados para Mascotas 💖</h1>

      {/* Perros */}
      <section className="bloque-cuidados">
        <h2 className="titulo-seccion">🐶 Cuidados para Perros</h2>
        <div className="cuidados-grid">
          {datos.cuidadosPerro.map((item, index) => (
            <div className="cuidados-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <div className="icono-abajo">
                <img src={item.icono} alt="icono" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gatos */}
      <section className="bloque-cuidados">
        <h2 className="titulo-seccion">🐱 Cuidados para Gatos</h2>
        <div className="cuidados-grid">
          {datos.cuidadosGato.map((item, index) => (
            <div className="cuidados-card" key={index}>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <div className="icono-abajo">
                <img src={item.icono} alt="icono" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cuidados;
