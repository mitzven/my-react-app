// src/components/Footer.js
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
                <FaGithub className="footer-icon" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="footer-icon" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer-icon" />
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
                  Contact
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
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>API</li>
              <li>Maquette</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
