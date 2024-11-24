import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import PopupAd from "./components/PopupAd"; // Import the popup component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Certificates from "./components/Projects/Certificates";

function App() {
  const [load, updateLoad] = useState(true);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Preloader timeout
    const preloaderTimer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    // Popup ad timeout
    const hasSeenAd = localStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      const popupTimer = setTimeout(() => {
        setShowAd(true);
        localStorage.setItem("hasSeenAd", "true");
      }, 3000); // Show ad 3 seconds after load

      return () => {
        clearTimeout(preloaderTimer);
        clearTimeout(popupTimer);
      };
    }

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        {/* Popup Ad */}
        {showAd && (
          <PopupAd
            link="https://fix-it-one.vercel.app/" // Replace with your company website URL
            onClose={() => setShowAd(false)} // Close popup handler
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificate" element={<Certificates />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
