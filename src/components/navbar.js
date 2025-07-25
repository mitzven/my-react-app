import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "/Users/milevaaadaube/my-react-app/src/App.css";
import "/Users/milevaaadaube/my-react-app/src/index.css";
import "/Users/milevaaadaube/my-react-app/src/components/navbar.css";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          JOHN DOE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Services" className="nav-link">
              SERVICES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav-link">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              CONTACT
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mentions" className="nav-link">
              MENTIONS LÉGALES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNavbar;
