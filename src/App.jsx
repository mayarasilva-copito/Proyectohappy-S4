import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Caracteristicas from "./components/caracteristicas";
import Footer from "./components/footer";
import Tipos from "./components/tipos";
import LoginNuevo from "./components/LoginNuevo";
import Comunidad from "./components/comunidad";
import RutaPrivada from "./components/rutaprivada";
import Formulario from "./components/Formulario";
import RegistroNuevo from "./components/RegistroNuevo";
import Portada from "./components/portada";
import Quienessomos from "./components/quienessomos";
import Listademascotas from "./components/mascotas";
import Contactos from "./components/contactos";
import Cuidados from "./components/cuidados";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/Portada"
          element={
            <>
              <Portada /> 
            </>
          }
        />
        <Route path="/quienessomos" element={<Quienessomos/>} />
        <Route path="/mascotas" element={<Listademascotas/>} />
        <Route path="/cuidados" element={<Cuidados/>} />
        <Route
          path="/formulario"
          element={
            <RutaPrivada>
              <Formulario />
            </RutaPrivada>
          }
        />
       
        <Route path="/contactos" element={<Contactos/>} />

        {/* LOGIN Y REGISTRO */}
        <Route path="/iniciar-sesion" element={<LoginNuevo />} />
        <Route path="/Registrarse" element={<RegistroNuevo />} />

        {/* COMUNIDAD PRIVADA */}
        <Route
          path="/comunidad"
          element={
            <RutaPrivada>
              <Comunidad />
            </RutaPrivada>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
