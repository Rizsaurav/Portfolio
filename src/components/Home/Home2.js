import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-center">
              I fell in love with programming and I am learning something new every day.
              Learning has been keeping me humble so far.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, and Java. </b>
              </i>
              <br />
              <br />
              My field of interest includes building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and modern frameworks like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>.
            </p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="justify-content-center text-center">
          <Col md={12} className="home-about-social">
            <h1 className="text-center">FIND ME ON</h1>
            <p className="text-center">
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links d-flex justify-content-center">
              <li className="social-icons">
                <a
                  href="https://github.com/Rizsaurav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Sauravvvvvv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saurav-rijal-08082a261/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sauravrz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
