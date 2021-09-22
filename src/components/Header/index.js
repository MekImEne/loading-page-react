import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header-area header-sticky">
          <Container>
            <Row>
              <Col md={12}>
                <Navbar className="main-nav" expand="lg">
                  <Navbar.Brand className="logo" href="#home">
                    Fitness <em>Studio</em>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav as="ul" className="nav">
                      <li>
                        <Nav.Link className="active"> Home</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link>About</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link>Classes</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link>Schedules</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link>Contact</Nav.Link>
                      </li>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </header>
      </>
    );
  }
}
