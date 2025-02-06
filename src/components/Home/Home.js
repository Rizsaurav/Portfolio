import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/image.png"; // Ensure this is your profile picture
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AboutCard from "../About/AboutCard"; // Using AboutCard for "Let Me Introduce Myself"
import Toolstack from "../About/Toolstack"; // Keeping "Find Me On" at bottom
import Techstack from "../About/Techstack";

function Home() {
  return (
    <section>
      {/* Home Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* Text Section */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Saurav Rijal</strong>
              </h1>

              <div style={{ padding: "50px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Profile Picture Section */}
            <Col md={5} className="text-center">
              <img
                src={homeLogo}
                alt="Saurav Rijal"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Me Section */}
      <Container fluid className="about-section" id="about">
        <Container className="d-flex flex-column align-items-center">
          <h1 className="project-heading text-center">
            About <strong className="purple">Me</strong>
          </h1>
          <Col md={8}>
            <AboutCard /> {/* Contains "Let Me Introduce Myself" */}
          </Col>
        </Container>
      </Container>

      {/* Tech Stack & Tools Section */}
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading text-center">
            <strong className="purple">Tech Stack</strong>
          </h1>
          <Techstack />

          <h1 className="project-heading text-center">
            <strong className="purple">Tools I Use</strong>
          </h1>
          <Toolstack />
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
