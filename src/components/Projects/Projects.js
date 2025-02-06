import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Next Word Predictor"
              description="GNN based LLM that trains itself the vocabulary usage to be able to predict next word based on the sample provided i.e either a large literature or a person's speech. In short, 
              A deep learning model trained on text data to predict the next word in a sequence."
              ghLink="https://github.com/Rizsaurav/Next-Word-Predicton-LSTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie Finder"
              description="A Movie Finder that scraped 1000 best rated movies. Suggests users movies based on their search history, 
             sentiment score after sentiment analysis done on the movie reviews and genres."
              // ghLink="https://github.com/Rizsaurav"
              // demoLink="https://blogs.saurav.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Talking Points Flashcards"
              description="Developed Flashcards for my office in my University Library to prepare for our Library Tours."
              ghLink="https://github.com/Rizsaurav/NotFlashy"
              demoLink="https://rizsaurav.github.io/NotFlashy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Anarchy"
              description="Using Game-Theory and GNNs, we predicted probability of Anarchy."
              ghLink="https://github.com/Rizsaurav/Anarchy"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* Commented out these last two cards to display only 4 */}
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="bandai cha"
              description="training ma."
              ghLink="https://github.com/traininggg a little" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Bandai cha"
              // description="Trained ma"
              // ghLink="https://github.com/Rizsaurav/Face_And_Emotion_Detection"
              // demoLink="https://blogs.souefefmyfeifnjit.tech/"      
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
