import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./resgistrar.css";

function RegistroNuevo ({ onRegister, cambiarVista }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const registrar = async () => {
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Cuenta creada con éxito");
        onRegister && onRegister(user);
      })
      .catch((error) => {
        console.log("Error al registrar el usuario", error.code);
        alert("Error: " + error.message);
      });
  };

  const iniciarSesionGoogle = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Cuenta creada con Google");
        onRegister && onRegister(user);
      })
      .catch((error) => {
        console.log("Error al registrar con Google", error.code);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="registrar-container">
      <div className="registrar-card">
        <h1>✨ Crear Cuenta</h1>

        <input
          type="email"
          placeholder="📧 Escribe tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="🔒 Escribe tu Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-registrar" onClick={registrar}>
          Crear Cuenta ✨
        </button>

        <p>o</p>

        <button className="btn-google" onClick={iniciarSesionGoogle}>
          🔵 Crear cuenta con Google
        </button>
      </div>
    </div>
  );
}

export default RegistroNuevo;
