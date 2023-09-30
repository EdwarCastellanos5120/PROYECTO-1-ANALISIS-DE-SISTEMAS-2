import React from "react";
import "../Styles/footerStyles.css"; // Asegúrate de importar tus estilos CSS aquí

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SuperGas</p>
        <ul className="footer-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
