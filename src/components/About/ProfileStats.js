import React from "react";
import { Row, Col } from "react-bootstrap";

function ProfileStats() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={12}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            LeetCode <strong className="purple">Status</strong>
          </h1>
          <a href="https://leetcode.com/ravik60656?ext=heatmap" target="_blank" rel="noopener noreferrer">
            <img
              src="https://leetcard.jacoblin.cool/ravik60656"
              alt="LeetCode Stats"
              style={{ 
                borderRadius: "10px", 
                border: "1px solid #ddd", 
                width: "100%", 
                maxWidth: "600px",
                display: "block",
                margin: "0 auto"
              }}
            />
          </a>
        </Col>
      </Row>
      
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub Profile 💪
      </h1>
      
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Col xs={12} md={4} style={{ marginBottom: "10px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sabarishcodewizard&show_icons=true&locale=en&layout=compact&theme=chartreuse-dark"
            alt="Top Languages"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Col>
        <Col xs={12} md={4} style={{ marginBottom: "10px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=sabarishcodewizard&show_icons=true&locale=en&theme=chartreuse-dark"
            alt="GitHub Stats"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Col>
        {/* <Col xs={12} md={4} style={{ marginBottom: "10px" }}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sabarishcodewizard&theme=chartreuse-dark"
            alt="GitHub Streak"
            style={{ borderRadius: "10px", width: "100%" }}
          />
        </Col> */}
      </Row>

      <h2 style={{ paddingBottom: "20px" }}>🏆 GitHub Trophies</h2>
      <img
        src="https://github-profile-trophy.vercel.app/?username=SabarishCodeWizard&theme=default&no-frame=false&no-bg=false&margin-w=4"
        alt="GitHub Trophies"
        style={{ borderRadius: "10px", width: "100%", maxWidth: "600px" }}
      />

      <h2 style={{ paddingTop: "20px" }}>Connect with me:</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        <a href="https://www.linkedin.com/in/sabarish777" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="LinkedIn"
            style={{ width: "48px", height: "48px" }}
          />
        </a>
        <a href="https://www.instagram.com/r_sabarish_k/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
            alt="Instagram"
            style={{ width: "48px", height: "48px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default ProfileStats;
