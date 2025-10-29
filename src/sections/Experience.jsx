
import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import TCSlogo3 from "../assets/TCSlogo3.jpg"; 

const experienceData = [
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services, Hyderabad, India",
    location: "Hyderabad, India",
    duration: "May 2022 - Dec 2023",
     bgImageClass: "tcs-background",
    points: [
      "Architected and scaled 15+ high-performance RESTful microservices for a large-scale enterprise data platform, integrating secure authentication (JWT) and optimizing throughput with Redis caching and asynchronous processing",
"Contributed to a high-availability distributed system on AWS, leveraging Docker/Kubernetes for orchestration and proactively monitoring system health to ensure 99.9% system availability",
"Improved data retrieval efficiency by optimizing PostgreSQL and MongoDB queries with advanced indexing techniques, boosting speed by 30% for critical data pipelines",
"Collaborated effectively across global time zones in Agile sprints, successfully translating user requirements into executable technical tasks"

    ]
  },
  {
    title: "Software Developer",
    company: "Northwest Missouri State University, Maryville, Missouri",
    location: "Maryville, Missouri",
    duration: "Aug 2024 - May 2025",
    points: [
      "Led the end-to-end system design and full-stack development for mission-critical academic web applications, ensuring high reliability and maintainability for hundreds of users",
"Optimized PostgreSQL schema and refined backend business logic, achieving a 30% reduction in API response times for high-volume data retrieval through efficient indexing and caching",
"Engineered reusable and accessible user interfaces using React.js, Tailwind CSS, and Material-UI , enhancing the user experience across all devices",
"Drove the technical requirements process by collaborating with faculty and instructional designers, translating complex needs into concrete technical specifications"

    ]
  },
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
