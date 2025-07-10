
import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css"; // reuse your main stylesheet

const educationData = [
    {
        degree: "Master of Science in Information Systems",
        school: "Northwest Missouri State University ",
        duration: "Jan 2024 - May 2025",
        details: [
            "Gained a strong foundation in Java OOP principles, enabling the development of robust, reusable, and maintainable backend systems.",
            "Became proficient in Database Design and SQL, including normalization, indexing, and query optimization for real-world applications.",
            "Acquired practical knowledge of Enterprise Networking, covering protocols, security layers, and infrastructure design for scalable systems.",
            "Developed skills in Project Management, including risk assessment, task scheduling, and stakeholder communication aligned with PMBOK principles.",

            "Built hands-on expertise in Financial Modeling, interpreting financial data and creating models for decision-making and business forecasting.",
            "Applied Business Intelligence (BI) techniques to analyze data, build dashboards, and support data-driven decision-making.",
            "Learned Systems Analysis and Design, applying SDLC  methodology to plan and document information systems effectively.",

        ]

    },
    {
        degree: "Bachelor of Technology in Electrical and Electronics Engineering",
        school: "Jawaharlal Nehru Technological University of Hyderabad",
        duration: "2017 - 2021",
        details: [
            "Developed a strong understanding of programming, problem-solving, and system-level design.",
            "Applied foundational concepts of digital electronics and embedded systems relevant to computing."
        ]


    }];

const Education = () => {
    return (
        <section className="education-section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="education-container">
                {educationData.map((edu, index) => (
                    <motion.div
                        className="education-card"
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{
                            y: -6,
                            backgroundColor: "#e0e0e0",
                            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                    >
                        <div className="timeline-dot" />
                        <div>
                            <h3>{edu.degree}</h3>
                            <p className="school">
                                {edu.school} <span> — {edu.duration}</span>
                            </p>
                            <ul>
                                {edu.details.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                                {/* {edu.details} */}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
