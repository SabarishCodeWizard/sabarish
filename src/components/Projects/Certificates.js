import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import c1 from "../../Assets/Projects/c1.jpg";
import c2 from "../../Assets/Projects/c2.jpg";
import c3 from "../../Assets/Projects/c3.jpg";
import c4 from "../../Assets/Projects/c4.png";
import c5 from "../../Assets/Projects/c5.png";

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const handleShow = (imgPath) => {
        setModalImage(imgPath);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

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
                    <Col md={4} className="project-card" onClick={() => handleShow(c1)}>
                        <ProjectCard
                            imgPath={c1}
                            isBlog={false}
                            title="Navigation System"
                        />
                    </Col>

                    <Col md={4} className="project-card" onClick={() => handleShow(c2)}>
                        <ProjectCard
                            imgPath={c2}
                            isBlog={false}
                            title="Machine Learning"
                        />
                    </Col>
                    <Col md={4} className="project-card" onClick={() => handleShow(c3)}>
                        <ProjectCard
                            imgPath={c3}
                            isBlog={false}
                            title="Fullstack"
                        />
                    </Col>

                    <Col md={4} className="project-card" onClick={() => handleShow(c4)}>
                        <ProjectCard
                            imgPath={c4}
                            isBlog={false}
                            title="Hidden Cost Identifier"
                        />
                    </Col>
                    <Col md={4} className="project-card" onClick={() => handleShow(c5)}>
                        <ProjectCard
                            imgPath={c5}
                            isBlog={false}
                            title="Data-Analytics"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Modal for displaying the image */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Project Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={modalImage}
                        alt="Project"
                        style={{ width: "100%", height: "auto" }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Projects;
