// src/components/Footer.js
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="footer-inner">
        <Row>
          {/* Colonne 1 */}
          <Col md={4} className="mb-4">
            <h5 className="title-footer">John Doe</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://maps.app.goo.gl/n8own3BHS3ic6TkXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  40 rue Laure Diebold
                  <br />
                  69009 Lyon, France
                </a>
              </li>

              <li>
                <a href="tel:" className="footer-link">
                  1020304050{" "}
                </a>
              </li>
              <li>
                <a href="mailto:" className="footer-link">
                  john.doe@gmail.com
                </a>
              </li>
            </ul>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github footer-icon"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x footer-icon"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin footer-icon"></i>
              </a>
            </div>
          </Col>

          {/* Colonne 2 */}
          <Col md={4} className="mb-4">
            <h5 className="title-footer">Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Me contacter
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="footer-link">
                  Mentions légales
                </a>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 */}
          <Col md={4}>
            <h5 className="title-footer">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  Fresh Food
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  Restaurant Akira
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  Espace bien-être
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  SEO
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  Création d'une API
                </a>
              </li>
              <li>
                {" "}
                <a href="/portfolio" className="footer-link">
                  Maquette d'un site
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
