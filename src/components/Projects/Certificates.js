import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import voice from "../../Assets/Projects/voice.png";
import emotion from "../../Assets/Projects/emotion.png";
import extension from "../../Assets/Projects/extension.png";
import attendance from "../../Assets/Projects/attendance.png";
import suicide from "../../Assets/Projects/suicide.png";
import tamil from "../../Assets/Projects/tamil.png";

import c1 from "../../Assets/Projects/c1.jpg";
import c2 from "../../Assets/Projects/c2.jpg";
import c3 from "../../Assets/Projects/c3.jpg";
import c4 from "../../Assets/Projects/c4.png";
import c5 from "../../Assets/Projects/c5.png";



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
                            imgPath={c1}
                            isBlog={false}
                            title="Navigation System"
                        // description="This project is an attendance monitoring system that uses facial recognition technology to mark and track attendance. It utilizes OpenCV for face detection, a machine learning model for face recognition, and Flask for the web interface."
                        // ghLink="https://github.com/SabarishCodeWizard/Bannari-Amman-Attendance-Monitering-System"
                        // demoLink="https://drive.google.com/file/d/1Gqt7hocnJyS9D3U5s7ufA17NXbxndkKI/view?pli=1"
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={c2}
                            isBlog={false}
                            title="Machine Learning"
                        // description="This Chrome extension allows users to scrape product information from e-commerce websites directly from their browser. It utilizes a popup interface for entering the product URL and provides real-time scraping functionality"
                        // ghLink="https://github.com/SabarishCodeWizard/HiddenCost-Chrome-Extension"
                        // demoLink="https://www.youtube.com/watch?v=3X69VkNuC_8"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={c3}
                            isBlog={false}
                            title="Fullstack"
                        // description="This web application provides a comprehensive translation service that supports translating text between multiple languages using the Google Translate API. It includes features like speech-to-text, voice selection for text-to-speech, translation history, favorites management, and a leaderboard. The application is designed to facilitate easy interaction through its intuitive interface."
                        // ghLink="https://github.com/SabarishCodeWizard/-Tamil-Translation-and-Speech-Synthesis-Application-"
                        // demoLink="https://tamiltranslator.pythonanywhere.com/"
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={c4}
                            isBlog={false}
                            title="Hidden Cost Identifier"
                        // description="This is a simple car game implemented in Python using Pygame for graphics and MediaPipe for hand tracking. The player controls the car using hand gestures detected via the webcam."
                        // ghLink="https://github.com/SabarishCodeWizard/Hand-Tracked-Car-Game-using-Pygame-and-MediaPipe?tab=readme-ov-file"
                        // demoLink="https://drive.google.com/file/d/11wqow5xMREfjLlpZASJc6ggIHk6-SsAZ/view"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={c5}
                            isBlog={false}
                            title="Data-Analytics"
                        // description="A BIT voice assistant is a digital tool designed to understand and respond to spoken commands. It leverages voice recognition technology to interpret user requests, such as answering questions, setting reminders, playing music, or controlling smart devices"
                        // ghLink="https://github.com/SabarishCodeWizard/BIT-Voice-Assistant?tab=readme-ov-file"
                        // demoLink="https://drive.google.com/file/d/1MiKG7Uwik6E1_09Ev09YLbfcmODy-b1G/view"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
