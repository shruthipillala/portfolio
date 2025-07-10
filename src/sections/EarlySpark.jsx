import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import "../styles/Projects.css"; // reuse existing project styles
import RotaryClubEssay from "../assets/RotaryClubEssay.jpg";
import CLBlogo3 from "../assets/CLBlogo3.png";
import Essay from "../assets/Essay.jpg";
import PaintingCompetetion from "../assets/PaintingCompetetion.jpg";
import TCSAward from "../assets/TCSAward.jpg";
import CLB from "../assets/CLB.jpg"; 
import Essaylogo2 from "../assets/Essaylogo2.png"; // Assuming you have a logo for the essay award    
import Paintinglogo2 from "../assets/Paintinglogo2.png"; 
import RotaryClublogo from  "../assets/RotaryClublogo.png"// Assuming you have a logo for the painting competition
import TCSlogo2 from "../assets/TCSlogo2.png"; // Assuming you have a logo for the TCS award
import { image, link } from "framer-motion/client";


const earlySparkItems = [
    {
        title: " State 10th Rank – Science Talent Search Exam",
        description:

            "Secuerd a top position in a state-level exam conducted by V. Chockkalingam Bhai Award Council, testing advanced concepts in Physics, Chemistry, and Mathematics.",
        image: CLBlogo3,
        link: CLB
    },
    {
        title: "Essay Excellence Award – Rotary Club Hanamkonda",
        description:
            "Awarded a consolation prize for excellence in essay writing, showcasing clarity of thought and impactful expression in a regional competition.",
        image: RotaryClublogo,
        link:  RotaryClubEssay
    },
    {
        title: "Participation in National Awareness Campaign – Ministry of Water Resources",
        description:
            "Participated in a school-level painting contest on “Save Water, Secure Future” by the Ministry of Water Resources, Govt. of India.",
        image: Paintinglogo2,
            link: PaintingCompetetion,
    },
    {
        title: "Recognized for Telugu Essay Excellence",
        description:
            "Participated in a Telugu essay writing competition during Kakatiya Utsavalu, showcasing cultural and literary expression.",
       image: Essaylogo2,
            link: Essay,
    },
    {
        title: "Special Achievement Award – TCS",
        description:
            "Received for outstanding contributions to organizational success through high-impact feature delivery and system performance enhancements.",
        image: TCSlogo2,
            link: TCSAward,
    }

];

const EarlySpark = () => {
    return (
        <section id="early-spark" className="projects-section">
            <h2 className="section-title">Beyond the Resume</h2>
            <div className="projects-container">
                {earlySparkItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="project-image"
                            />
                        )}
                        <h3 className="project-title">{item.title}</h3>
                        <p className="project-description">{item.description}</p>
                        <div className="project-links">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn outline"
                            >
                                View Certificate
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EarlySpark;
