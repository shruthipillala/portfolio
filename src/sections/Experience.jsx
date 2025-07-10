
import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css"; // reuse your main stylesheet
import TCSlogo3 from "../assets/TCSlogo3.jpg"; // adjust path if needed

const experienceData = [
  {
    title: "Assistant System Engineer",
    company: "Tata Consultancy Services, Hyderabad, India",
    location: "Hyderabad, India",
    duration: "May 2022 - Dec 2023",
     bgImageClass: "tcs-background",
    points: [
      "Built responsive, adaptive UIs using HTML, CSS, JavaScript, and ReactJS, fully aligned with client requirements",
      "Implemented RESTful APIs that reduced data retrieval time by 30%, streamlining communication between frontend and backend system",
      "Optimized performance for 20K+ users.",
      "Collaborated in Agile teams for requirement analysis, system design, and technical documentation; participated in code reviews and debugging.",
      "Delivered web solutions with over 95% on-time completion, consistently meeting client expectations and project deadlines."
    ]
  },
  {
    title: "Graduate Assistant",
    company: "Northwest Missouri State University, Maryville, Missouri",
    location: "Maryville, Missouri",
    duration: "Jan 2025 - May 2025",
    points: [
      "Supported teaching of Excel, financial analysis, and statement forecasting.",
      "Clarified TVM concepts and guided use of VLOOKUP for dynamic modeling.",
      " Clarified concepts of time value of money (TVM), including present and future value calculations, to enhance students’ understanding of financial decision-making.",
      " Provided individualized feedback on assignments and projects to ensure accurate application of financial modeling techniques.",
      "Led help sessions, graded assignments, and assisted in course material prep."
    ]
  },
  {
    title: "Teaching Assistant",
    company: "Northwest Missouri State University, Maryville, Missouri",
    location: "Maryville, Missouri",
    duration: "Aug 2024 - Dec 2024",
    points: [
      "Assisted students in mastering descriptive statistics, probability, and Bayes’ Theorem through real-world examples",
      "Guided application of hypothesis testing and regression for statistical inference and modeling.",
      "Led review sessions and interactive discussions to clarify complex topics and improve student engagement and comprehension."
    ]
  }
];

const Experience = () => {
  return (
    <section className="education-section" id="experience">
      <h2 className="section-title">Professional Experience</h2>
      {/* <h2 className="section-title">Experience</h2> */}
      <div className="education-container">
        {experienceData.map((edu, index) => (
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
            <div className="timeline-dot"></div>
            <h3>{edu.title}</h3>
            <p className="school">
              {edu.company} — <span>{edu.duration}</span>
            </p>
            <ul>
              {edu.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
