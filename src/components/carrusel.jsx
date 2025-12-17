import { useState, useEffect } from "react";
import "./carrusel.css";

const slides = [
  { img: "campana1.png" },
  { img: "campana2.png" },
  { img: "campana3.png" }
];

function Carrusel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🔥 Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrusel-container">
      <button className="carrusel-btn left" onClick={prev}>‹</button>

      <div className="carrusel">
        <img src={slides[index].img} alt="campaña" />
      </div>

      <button className="carrusel-btn right" onClick={next}>›</button>
    </div>
  );
}

export default Carrusel;
