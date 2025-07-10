// src/components/FooterContactBar.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import '../styles/FooterContactBar.css';

const FooterContactBar = () => {
  return (
    <footer className="footer-contact">
      <h3>Let's Connect</h3>
      <p>Let’s create something great together 🚀—always happy to collaborate! 😊</p>
      
      <a href="mailto:yourname@email.com" className="footer-email">
        shruthipillala2109@gmail.com
      </a>

      <div className="footer-icons">
        <a href="https://github.com/shruthipillala" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shruthi-pillala/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> 
        <a href="https://instagram.com/shruthipillala" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default FooterContactBar;
