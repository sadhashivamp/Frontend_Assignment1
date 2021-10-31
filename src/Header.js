import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="home">Sensibull</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="stocks">Stocks</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
