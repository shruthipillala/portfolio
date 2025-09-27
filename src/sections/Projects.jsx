
import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import "../styles/Projects.css"; 
import SimonGame from "../assets/SimonGame.png";
import Portfolio from "../assets/Portfolio.png";
import DrumKit  from "../assets/DrumKit.png";
import WhackAMole from "../assets/WhackAMole.png";
import Keeper from "../assets/Keeper.png";
import DiceChallenge from "../assets/DiceChallenge.png";
import AIQuoteGenerator from "../assets/AIQuoteGenerator.png";
import DevMentorAI from "../assets/DevMentorAI.png";
const projects = [
   {
    title: "DevMentor AI",
    description:
      "An AI-powered career assistant that helps job seekers improve resumes and prepare for interviews with smart, personalized insights",
    github: "https://github.com/shruthipillala/ai-quote-generator",
    demo: "https://app.devmentorai.com/",
    image: DevMentorAI, 
  },
    {
    title: "AI Quote Generator",
    description:
      "A simple web app that generates smart quotes using Spring AI and a lightweight LLM integration.",
    github: "https://github.com/shruthipillala/ai-quote-generator",
    demo: "https://ai-quote-generator-aajl.onrender.com/",
    image: AIQuoteGenerator, 
  },
  {
    title: "Simon Challenge",
    description:
      "Built an interactive Simon Challenge game using React to test user memory through interactive color sequence matching.",
    github: "https://github.com/shruthipillala/simon-game",
    demo: "https://shruthipillala.github.io/simon-game/",
    image: SimonGame, 
  },
  {
    title: "Past Portfolio🤪",
    description:
      "Built my first portfolio using just HTML and CSS—no JavaScript, just pure vibes and divs! 😄",
    github: "https://github.com/shruthipillala/Personal-site",
    demo: "https://shruthipillala.github.io/Personal-site/",
    image: Portfolio,
  },
  {
    title: "Dice Game",
    description:
      "A simple dice game that runs on page refresh, randomly rolling two dice and displaying the winner instantly.",
    github: "https://github.com/shruthipillala/dice",
    demo: "https://shruthipillala.github.io/dice/",
    image: DiceChallenge,
  },
  {
    title: "Whack A Mole",
    description:
      "A fast-paced game that starts on keypress, where players click flashing holes within 30 seconds to score points and beat the timer.",
    github: "https://github.com/shruthipillala/whack-a-mole",
    demo: "https://shruthipillala.github.io/whack-a-mole/",
    image: WhackAMole,
  },
   {
    title: "Keeper App",
    description:
      "A minimalist note-taking app inspired by Google Keep, allowing users to add and manage short notes or tasks with ease.",
    github: "https://github.com/shruthipillala/keeper-app",
    demo: "https://shruthipillala.github.io/keeper-app/",
    image: Keeper,
  },
     {
    title: "Drum Kit",
    description:
      "An interactive virtual drum kit where each keypress plays a unique drum sound, letting users create beats in real time.",
    github: "https://github.com/shruthipillala/drumkit",
    demo: "https://shruthipillala.github.io/drumkit/",
    image: DrumKit,
  }

];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn outline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
