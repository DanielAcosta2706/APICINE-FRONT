import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer">
        <Row className="rowFooter rowFooter1">
          <Col>--- CINEX ---</Col>
        </Row>
        <Row className="rowFooter">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Nav.Link
              href="#redesSociales"
              style={{
                color: "#fff",
                width: "300px",
              }}
            >
              <FacebookIcon
                className="linkFooter"
                style={{ margin: " 0 20px 0 20px" }}
              ></FacebookIcon>
              <InstagramIcon
                className="linkFooter"
                style={{ margin: " 0 20px 0 20px" }}
              ></InstagramIcon>
              <TwitterIcon
                className="linkFooter"
                style={{ margin: " 0 20px 0 20px" }}
              ></TwitterIcon>
              <YouTubeIcon
                className="linkFooter"
                style={{ margin: " 0 20px 0 20px" }}
              ></YouTubeIcon>
            </Nav.Link>
          </Col>
        </Row>
        <Row className="rowFooter">
          <Col>
            © CopyRight 2022. Todos los derechos reservados | Desarrollado por
            Daniel Acosta
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
