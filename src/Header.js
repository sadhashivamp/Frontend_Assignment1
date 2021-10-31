import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <Navbar.Brand
          href="home"
          style={{
            fontFamily: "impact",
            fontSize: "40px",
          }}
        >
          SENSIBULL
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="stocks"
            style={{
              fontFamily: "Helvetica",
              fontSize: "30px",
              marginLeft: "1000px",
            }}
            color="primary"
          >
            Stocks
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
