import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello everyone! I am <span className="purple"> Sabarish R</span> from the IT department at <span className="purple"> Bannari Amman Institute of Technology,</span> currently entering my 3rd year of studies. I completed my SSLC and high school education at Kongu Vellalar Matric Higher Secondary School. I am now pursuing a Bachelor's degree in Information Technology at Bannari Amman Institute of Technology. I am a self-motivated individual with a deep passion for <span className="purple">web technology and mobile application development.</span> My enthusiasm for software development and artificial intelligence has grown significantly through comprehensive exposure to these fields and hands-on project experiences. I thrive on building and applying algorithms to solve real-world industry problems, and I am eager to continue expanding my knowledge and skills in these domains.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Birthday</span> : 12 April 2005
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Email</span> : sabarish.it22@bitsathy.ac.in
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Phone</span> : +91 7845081278
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sabarish R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
