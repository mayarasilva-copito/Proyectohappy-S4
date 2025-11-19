import './footer.css';

  function Footer() {
  return (
    <>
      <footer className="mi-footer">
        <p>© 2025 Happy Tails. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/happy_tails_dogandcat/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          </a>
        </div>
      </footer>
    </>
  );
  }

export default Footer;
