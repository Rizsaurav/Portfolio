import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12} /* Takes full width for centering */
            style={{
              textAlign: "center", /* Centering the header */
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "#ddd" }}>
              Know Who <strong className="purple">I am</strong>
            </h1>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8} /* Adjusted width for a better layout */
            style={{
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ color: "#ddd" }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading" style={{ color: "#ddd" }}>
          <strong className="purple">Tools</strong> that I use...
        </h1>
        
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
