import React from "react";
import "../styles/About.css"; // optional: you can use styles.css if you prefer
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const About = () => {
  const navigate = useNavigate();

  return (
    <motion.section id="about" className="about-section"
    
    initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -40 }}
  transition={{ duration: 0.4 }}
    
    
    
    
    >
      <h2 className="about-heading">
        About <span>Me</span>
      </h2>
      <p className="about-intro">
        {/* Iam Shruthi, a Full Sack Java Developer */}
        Iam <span className="name-highlight">Shruthi</span>, a Full Stack Java Developer
      </p>
      <p className="about-subtext">
        My most recent work stint was with <a
          href="https://www.tcs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="name-highlight-copmany"
        >
          TCS
        </a>
        , where I contributed to the development of scalable web applications and backend services using technologies like Java, Spring Boot, and SQL. I was part of agile teams delivering enterprise-grade solutions across diverse domains. This experience helped me strengthen my problem-solving skills, understand client requirements, and deliver robust, maintainable code.
        <br />
      </p>
      <p className="about-description">
        I graduated from <a
          href="https://www.nwmissouri.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="university-link"
        >
          Northwest Missouri State University
        </a> with a <Link to="/about/education" className="link-no-underline">
          <b>Master's</b>
        </Link>{" "} degree in Information Systems, where I also worked as a <Link to="/about/journey" className="name-highlight-copmany">Software Developer</Link>contributing to campus-level applications and data-driven solutions. This role allowed me to apply and expand the practical and analytical problem-solving methods I developed during my coursework, translating academic concepts into real-world software projects.
      </p>
      <p className="about-description">
        Originally from <b>India</b>, I’ve lived in multiple cities, which has shaped my adaptability and openness to diverse perspectives. Outside of tech, I’m a huge fan of good food. On weekends, you’ll often find me exploring new cuisines or trying out unique local dishes, food is definitely my second love.
      </p>

      <div className="about-cards">
        <div className="about-card" onClick={() => navigate("/about/journey")}>
          <h3>Professional Journey</h3>
          <p>Explore my career path, key milestones, and experiences.</p>
          <span className="card-link">View Journey →</span>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
