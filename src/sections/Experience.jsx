
import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import TCSlogo3 from "../assets/TCSlogo3.jpg"; 

// const experienceData = [
//   {
//     title: "Software Engineer",
//     company: "Tata Consultancy Services, Hyderabad, India",
//     location: "Hyderabad, India",
//     duration: "May 2022 - Dec 2023",
//      bgImageClass: "tcs-background",
//     points: [
//       "Architected and scaled 15+ high-performance RESTful microservices for a large-scale enterprise data platform, integrating secure authentication (JWT) and optimizing throughput with Redis caching and asynchronous processing",
// "Contributed to a high-availability distributed system on AWS, leveraging Docker/Kubernetes for orchestration and proactively monitoring system health to ensure 99.9% system availability",
// "Improved data retrieval efficiency by optimizing PostgreSQL and MongoDB queries with advanced indexing techniques, boosting speed by 30% for critical data pipelines",
// "Collaborated effectively across global time zones in Agile sprints, successfully translating user requirements into executable technical tasks"

//     ]
//   },
//   {
//     title: "Software Developer",
//     company: "Northwest Missouri State University, Maryville, Missouri",
//     location: "Maryville, Missouri",
//     duration: "Aug 2024 - May 2025",
//     points: [
//       "Led the end-to-end system design and full-stack development for mission-critical academic web applications, ensuring high reliability and maintainability for hundreds of users",
// "Optimized PostgreSQL schema and refined backend business logic, achieving a 30% reduction in API response times for high-volume data retrieval through efficient indexing and caching",
// "Engineered reusable and accessible user interfaces using React.js, Tailwind CSS, and Material-UI , enhancing the user experience across all devices",
// "Drove the technical requirements process by collaborating with faculty and instructional designers, translating complex needs into concrete technical specifications"

//     ]
//   },
// ];


const experienceData = [
  {
    title: "Software Engineer",
    company: "Dematic",
    location: "Grand Rapids, MI",
    duration: "July 2025 - Present",
    bgImageClass: "dematic-background",
    points: [
      "Refactored backend logic to support modern hardware configurations, improving system reliability and reducing integration errors by 20% across multiple customer deployments.",
      "Developed features connecting user interfaces to centralized databases, increasing data tracking accuracy for daily storage and material movement operations by 15%."
    ]
  },
  {
    title: "Software Engineer",
    company: "Northwest Missouri State University",
    location: "Maryville, MO",
    duration: "August 2024 - May 2025",
    points: [
      "Designed and deployed a Java Spring Boot full-stack application with PostgreSQL to automate academic workflows for 10K+ users, reducing manual processing by 25%.",
      "Implemented automated document validation and server-side sanitization using Spring Boot, reducing corrupted file uploads by 30% and improving data reliability.",
      "Built 10+ reusable UI components using React and Tailwind CSS and partnered with stakeholders to translate requirements into scalable features, improving delivery speed by 20%."
    ]
  },
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services Ltd",
    location: "Hyderabad, India",
    duration: "August 2021 - December 2023",
    bgImageClass: "tcs-background",
    points: [
      "Designed and maintained Java Spring Boot microservices using an event-driven architecture, processing 1.2M+ transactions per day with 99.9% production availability.",
      "Built high-throughput data integration services using multi-threaded Java processing, improving reporting data ingestion speed by 50% through parallel execution.",
      "Optimized backend APIs and deployments by implementing Redis caching, tuning PostgreSQL and MongoDB queries, and migrating to Dockerized microservices, reducing latency by 35% and deployment time by 60%."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Tata Consultancy Services Ltd",
    location: "Remote",
    duration: "February 2021 - August 2021",
    points: [
      "Developed and refined 8–10 Java-based backend API components within a Spring Boot environment, contributing to feature enhancements and bug fixes.",
      "Maintained data integrity across 4 application modules by writing 10+ SQL queries and executing 15+ test scenarios to support stable production deployments."
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
