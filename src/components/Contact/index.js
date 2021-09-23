import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactBg from "../../assets/images/contact-bg.jpg";

import "./style.css";

export default class Contact extends Component {
  render() {
    return (
      <section className="section" id="contact-us">
        <Container fluid>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <div id="map">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="600px"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <div
                className="contact-form"
                style={{ backgroundImage: `url(‘${contactBg}’)` }}
              >
                <form id="contact" action="" method="post">
                  <Row>
                    <Col md={6} sm={12}>
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your Name*"
                          required=""
                        />
                      </fieldset>
                    </Col>
                    <Col md={6} sm={12}>
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email*"
                          required=""
                        />
                      </fieldset>
                    </Col>
                    <Col md={6} sm={12}>
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="Subject"
                        />
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </Col>
                    <Col lg={12}>
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
