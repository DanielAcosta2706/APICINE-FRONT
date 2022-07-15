import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar className="nav" collapseOnSelect expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    margin: "auto",
                  }}
                >
                  INICIO
                </Link>
                <Nav.Link href="#estrenos" style={{ color: "#fff" }}>
                  PROXIMOS ESTRENOS
                </Nav.Link>
                <Nav.Link href="#dulces" style={{ color: "#fff" }}>
                  CANDY
                </Nav.Link>
                <NavDropdown
                  title="MI CUENTA"
                  id="collasible-nav-dropdown"
                  style={{ color: "#fff" }}
                >
                  <NavDropdown.Item href="#action/3.1">
                    <Link
                      to="Login"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      INICIAR SESION
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    <Link
                      to="NewUser"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      REGISTRARSE
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#precios" style={{ color: "#fff" }}>
                  PROMOCIONES Y PRECIOS
                </Nav.Link>
                <Nav.Link href="#contacto" style={{ color: "#fff" }}>
                  CONTACTOS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link href="#redesSociales" style={{ color: "#fff" }}>
              <FacebookIcon className="linkNav"></FacebookIcon>
              <InstagramIcon className="linkNav"></InstagramIcon>
              <TwitterIcon className="linkNav"></TwitterIcon>
              <YouTubeIcon className="linkNav"></YouTubeIcon>
            </Nav.Link>
          </Container>
        </Navbar>
        <Navbar className="subNav" variant="dark">
          <Container>
            <Nav className="me-auto">
              <NavDropdown
                title="CINES"
                id="collasible-nav-dropdown"
                style={{ color: "#fff" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  PUERTO MADERO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">PALERMO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  MICROCENTRO
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  margin: "auto",
                }}
              >
                CINEX
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
