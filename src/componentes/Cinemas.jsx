import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Cinemas = ({ cinema }) => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Navbar>
        <Container className="containerCines">
          <Nav className="me-auto">
            <Nav.Link href="#">Palermo</Nav.Link>
            <Nav.Link href="#">Microcentro</Nav.Link>
            <Nav.Link href="#">Puerto Madero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cinemas;
