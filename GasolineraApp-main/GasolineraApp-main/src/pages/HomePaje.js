import React from "react";
import "../Styles/HomePageStyles.css"; // Importa el archivo CSS de HomePageStyles
import { Link } from "react-router-dom";
import Footer from "../components/footer"; // Asegúrate de proporcionar la ruta correcta al componente
const HomePage = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">Sistema de Distribución de Gasolina</h1>
        <img
          src="https://www.celumix.com/wp-content/uploads/2015/04/soporte-web.png"
          width={"100%"}
          height={"100%"}
          className="header-image"
          alt="Gasolinera"
        />
      </header>
      <div className="home-container">
        <p className="description">
          En esta plataforma, puedes realizar diversas acciones relacionadas con
          la distribución de gasolina.
        </p>

        <div className="features">
          <Link to="/promociones" className="feature-link">
            <div className="feature">
              <h2 className="feature-title">Ver Promociones </h2>
              <p className="feature-text">
                Haz pedidos de gasolina para tu empresa de manera rápida y
                sencillass.
              </p>
            </div>
          </Link>
          <Link to="/limpieza" className="feature-link">
            <div className="feature">
              <h2 className="feature-title">Solucionar Limpieza </h2>
              <p className="feature-text">
                Programa entregas de gasolina para garantizar un suministro
                constante.
              </p>
            </div>
          </Link>
          <Link to="/distri" className="feature-link">
            <div className="feature">
              <h2 className="feature-title">Monitorear Inventarios </h2>
              <p className="feature-text">
                Supervisa tus inventarios de gasolina y realiza seguimiento de
                los niveles.
              </p>
            </div>
          </Link>
          <Link to="/falta-colocar" className="feature-link">
            <div className="feature">
              <h2 className="feature-title">Falta Colocar</h2>
              <p className="feature-text">
                Supervisa tus inventarios de gasolina y realiza seguimiento de
                los niveles.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer-container">
      <Footer  />
      </div>
    </div>
  );
};

export default HomePage;
