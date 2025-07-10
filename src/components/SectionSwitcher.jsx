import React, { useState } from "react";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";

const SectionSwitcher = () => {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <div className="section-switcher">
      <div className="tab-buttons">
        <button onClick={() => setActiveSection("experience")}>Experience</button>
        <button onClick={() => setActiveSection("education")}>Education</button>
        <button onClick={() => setActiveSection("projects")}>Projects</button>
      </div>

      <div className="tab-content">
        {activeSection === "experience" && <Experience />}
        {activeSection === "education" && <Education />}
        {activeSection === "projects" && <Projects />}
      </div>
    </div>
  );
};

export default SectionSwitcher;
