import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Importamos auth desde firebase.js
import "./header.css";

function NavbarUsuario() {
  const navigate = useNavigate();
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => setMenuActivo(!menuActivo);

  const cerrarsesion = async () => {
    try {
      await signOut(auth);
      navigate("/intro");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

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
          <li><Link to="/caracteristicas">Caracteristicas</Link></li>
          <li><Link to="/tipos">Tipos</Link></li>
          <li><Link to="/comunidad">Comunidad</Link></li>
          <li><Link to="/Registrarse">Registrarse</Link></li>
          <li><button onClick={cerrarsesion}>Cerrar sesión</button></li>
        </ul>
      </div>
    </header>
  );
}

export default NavbarUsuario;