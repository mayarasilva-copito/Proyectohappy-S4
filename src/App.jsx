import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Caracteristicas from "./components/caracteristicas";
import Footer from "./components/footer";
import Tipos from "./components/tipos";
import LoginNuevo from "./components/LoginNuevo";
import Comunidad from "./components/comunidad";
import FloreriaSection from "./components/floreriaSection";
import RutaPrivada from "./components/rutaprivada";
import Formulario from "./components/Formulario";
import RegistroNuevo from "./components/RegistroNuevo";
import Portada from "./components/portada";

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

        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/tipos" element={<Tipos />} />

        {/* LOGIN Y REGISTRO */}
        <Route path="/iniciar-sesion" element={<LoginNuevo />} />
        <Route path="/Registrarse" element={<RegistroNuevo />} />

        {/* FORMULARIO */}
        <Route path="/formulario" element={<Formulario />} />

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
