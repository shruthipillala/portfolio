
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();

  /* ---------- helpers ---------- */
  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearTimer();
    setAboutOpen(true);
  };

  const scheduleClose = () => {
    // a short delay prevents flicker when crossing a 1-px gap
    clearTimer();
    closeTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

  // cleanup on unmount
  useEffect(() => () => clearTimer(), []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <span className="nav-name-highlight">Shruthi's Portfolio</span>
        </div>

        <ul className="navbar-menu">
          <li onClick={() => navigate("/Hero")}>Home</li>
          {/* ABOUT + dropdown */}
          <li
            className="dropdown-wrapper"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <span
              className="dropdown-toggle"
              onClick={() => navigate("/about")}
            >
              About ▾
            </span>

            {aboutOpen && (
              <div
                className="dropdown-menu"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <div onClick={() => navigate("/about/experience")}>
                  <strong>Experience</strong>
                  <p>My work and journey</p>
                </div>
                <div onClick={() => navigate("/about/education")}>
                  <strong>Education</strong>
                  <p>Academics &amp; achievements</p>
                </div>
                <div onClick={() => navigate("/about/certifications")}>
                  <strong>Certifications</strong>
                  <p>Courses and online credentials</p>
                </div>
                <div onClick={() => navigate("/about/early-spark")}>
                  <strong>Early Spark</strong>
                  <p>Competitions, awards beyond academics</p>
                </div>

              </div>
            )}
          </li>

          {/* other tabs */}

          <li onClick={() => navigate("/skills")}>Skills</li>
          <li onClick={() => navigate("/projects")}>Projects</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
