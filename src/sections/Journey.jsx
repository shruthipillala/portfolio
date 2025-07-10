import React from "react";

import "../styles/Journey.css";
import "../styles/Education.css"; // Import global styles
import "../styles/Experience.css"; // Import global styles
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";
import { Award, BookCheck, FileBadge } from "lucide-react";
import { BiCertification } from "react-icons/bi";
import EarlySpark from "./EarlySpark";
const Journey = () => {
  return (
    <section id="journey" className="education-section">
      <h2 className="section-title-journey">My Journey</h2>
<Experience />
      <Education /> 
      <Certification />
      <EarlySpark />
    </section>
  );
};

export default Journey;
