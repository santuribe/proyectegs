import React from 'react';
import '../app/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Acerca de nosotros</h5>
            <p>Breve descripción de tu empresa o proyecto.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos</h5>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab   
 fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div   
 className="copyright">
          <p>© {new Date().getFullYear()} EGS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;