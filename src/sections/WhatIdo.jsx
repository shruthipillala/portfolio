import React from 'react';
import '../styles/WhatIdo.css';
import { FaCode, FaServer, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const WhatIDo = () => {
  return (
    <section className="what-i-do-section">
      <h2 className="what-i-do-title">What I Do</h2>
      <div className="what-i-do-abstract-layout">
        <div className="card large">
          <div className="icon-circle"><FaLaptopCode /></div>
          <h3>Frontend Development</h3>
          <p>Responsive and interactive UI using React, HTML, and CSS for modern web experiences.</p>
        </div>
        <div className="card small">
          <div className="icon-circle"><FaServer /></div>
          <h3>Backend APIs</h3>
          <p>RESTful API design with Spring Boot & Node.js for secure, scalable apps.</p>
        </div>
        <div className="card wide">
          <div className="icon-circle"><FaDatabase /></div>
          <h3>Database Design</h3>
          <p>Optimized database schemas and integrations with MySQL, PostgreSQL & MongoDB.</p>
        </div>
        <div className="card mid">
          <div className="icon-circle"><FaCode /></div>
          <h3>Full-Stack Projects</h3>
          <p>Complete solutions from frontend to backend deployment using modern stacks.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
