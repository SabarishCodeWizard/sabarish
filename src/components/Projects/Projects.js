import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import voice from "../../Assets/Projects/voice.png";
import emotion from "../../Assets/Projects/emotion.png";
import extension from "../../Assets/Projects/extension.png";
import attendance from "../../Assets/Projects/attendance.png";
import car from "../../Assets/Projects/car.png";
import tamil from "../../Assets/Projects/tamil.png";

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
              imgPath={attendance}
              isBlog={false}
              title=" Monitoring System"
              description="This project is an attendance monitoring system that uses facial recognition technology to mark and track attendance. It utilizes OpenCV for face detection, a machine learning model for face recognition, and Flask for the web interface."
              ghLink="https://github.com/SabarishCodeWizard/Bannari-Amman-Attendance-Monitering-System"
              demoLink="https://drive.google.com/file/d/19DtCOCDNhFMn8IpXLP6hMghvy6_xHZnQ/view?usp=sharing"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extension}
              isBlog={false}
              title="HiddenCost-Chrome-Extension"
              description="This Chrome extension allows users to scrape product information from e-commerce websites directly from their browser. It utilizes a popup interface for entering the product URL and provides real-time scraping functionality"
              ghLink="https://github.com/SabarishCodeWizard/HiddenCost-Chrome-Extension"
              demoLink="https://drive.google.com/file/d/1U50r-Ailh9SyInWPpGwikTAgF9Acui4y/view?usp=sharing"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tamil}
              isBlog={false}
              title="Speech Synthesis Application"
              description="This web application provides a comprehensive translation service that supports translating text between multiple languages using the Google Translate API. It includes features like speech-to-text, voice selection for text-to-speech, translation history, favorites management, and a leaderboard. The application is designed to facilitate easy interaction through its intuitive interface."
              ghLink="https://github.com/SabarishCodeWizard/-Tamil-Translation-and-Speech-Synthesis-Application-"
              demoLink="https://bittranslator.pythonanywhere.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="BIT-Voice-Assistant"
              description="A BIT voice assistant is a digital tool designed to understand and respond to spoken commands. It leverages voice recognition technology to interpret user requests, such as answering questions, setting reminders, playing music, or controlling smart devices"
              ghLink="https://github.com/SabarishCodeWizard/BIT-Voice-Assistant?tab=readme-ov-file"
              demoLink="https://drive.google.com/file/d/1jXT92DWPtoQz6x0AisIWCppVvD-_I5-M/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Game with Hand Tracking"
              description="This is a simple car game implemented in Python using Pygame for graphics and MediaPipe for hand tracking. The player controls the car using hand gestures detected via the webcam."
              ghLink="https://github.com/SabarishCodeWizard/Hand-Tracked-Car-Game-using-Pygame-and-MediaPipe?tab=readme-ov-file"
              demoLink="https://drive.google.com/file/d/11wqow5xMREfjLlpZASJc6ggIHk6-SsAZ/view" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ChatBot with BERT, GPT-2, and YOLO Integration"
              description="This project is a Flask-based chatbot that integrates BERT for intent classification, GPT-2 for generating responses, and YOLOv5 for object detection in images. The chatbot can handle text inputs and image uploads, providing responses based on the detected objects and user queries."
              ghLink="https://github.com/SabarishCodeWizard/ChatBot-with-BERT-ChatGpt-2-Blip-and-YOLO-Integration"
              demoLink="https://drive.google.com/file/d/13LDJhfyJCAldd9nWiHMrDlBjM1EEmh1I/view"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
