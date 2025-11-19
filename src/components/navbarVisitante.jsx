import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function NavbarVisitante() {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => setMenuActivo(!menuActivo);

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <div className="logito">
          <div className="logo"></div> {/* Logo en CSS */}
          <span className="titulo">Mundo Floral</span>
          <div
            className={`menu-icon ${menuActivo ? "activo" : ""}`}
            onClick={toggleMenu}
          >
            <span className="barra"></span>
            <span className="barra"></span>
            <span className="barra"></span>
          </div>
        </div>
        <ul className={`nav-links ${menuActivo ? "activo" : ""}`}>
          <li><Link to="/portada">Inicio</Link></li>
          <li><Link to="/Caracteristicas">Caracteristicas</Link></li>
          <li><Link to="/tipos">Tipos</Link></li>
          <li><Link to="/comunidad">Comunidad</Link></li>
          <li><Link to="/Formulario">Formulario</Link></li>
          <li><Link to="/iniciar-sesion">Inicio Sesion</Link></li>
          <li><Link to="/Registrarse">Registrarse</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default NavbarVisitante;
