import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./header.css";

function NavbarUsuario() {
  const navigate = useNavigate();
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => setMenuActivo(!menuActivo);

  const cerrarsesion = async () => {
    try {
      await signOut(auth);
      navigate("/portada");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  return (
  <>
  <header className="nav-header">
  <div className="nav-inner">

    <Link to="/portada" className="logito">
      <div className="logo"></div>
      <span className="titulo">Happy Tails</span>
    </Link>

    <div className={`menu-icon ${menuActivo ? "activo" : ""}`} onClick={toggleMenu}>
      <span className="barra"></span>
      <span className="barra"></span>
      <span className="barra"></span>
    </div>

    <ul className={`nav-links ${menuActivo ? "activo" : ""}`}>
      <li><Link to="/portada">Inicio</Link></li>
      <li><Link to="/Quienessomos">Quienes Somos??</Link></li>
      <li><Link to="/Mascotas">Mascotas</Link></li>
      <li><Link to="/Cuidados">Cuidados</Link></li>
      <li><Link to="/Contactos">Contacto</Link></li>
      <li><Link to="/comunidad">Comunidad</Link></li>
      <li><Link to="/Formulario">Formulario</Link></li>
      <li><button onClick={cerrarsesion}>Cerrar sesión</button></li>
    </ul>

  </div>
</header>

  </>
  );
  
}

export default NavbarUsuario;
