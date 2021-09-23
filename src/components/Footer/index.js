import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col lg={12}>
              <p>Copyright &copy; 2020 Ftiness Studio</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
