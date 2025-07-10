import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.section id="contact" className="contact-links-section"
    
     initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -40 }}
  transition={{ duration: 0.4 }}
    >
      <h2>Let's Connect</h2>
      <div className="contact-links-grid">
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p>shruthipillala</p>
          <a href="https://github.com/shruthipillala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
       
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <p>shruthi-pillala</p>
          <a href="https://www.linkedin.com/in/shruthi-pillala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-card">
          <FaInstagram className="contact-icon" />
          <p>shruthipillala</p>
          <a href="https://www.instagram.com/shruthipillala/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>shruthipillala2109@gmail.com</p>
          <a href="mailto:shruthipillala2109@gmail.com">Email</a>
        </div>
        <div className="contact-card">
          <FaCode className="contact-icon" />
          <p>shruthipillala</p>
          <a href="https://leetcode.com/u/shruthipillala/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
