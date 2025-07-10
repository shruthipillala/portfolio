import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./components/About";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Certification from "./sections/Certification";
import SkillsSection from "./sections/SkillsSection";
import { useLocation } from "react-router-dom";
import FooterContactBar from "./sections/FooterContactBar";
import { AnimatePresence } from "framer-motion";
 import Cursor from "./sections/Cursor";
 import EarlySpark from "./sections/EarlySpark"; // adjust path
 import ScrollToTop from "./sections/ScrollToTop";
import ScrollToTopButton from "./sections/ScrollToTopButton";



// import Contact from "./components/Contact";

function App() {
const ConditionalFooter = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";
  return !hideFooter ? <FooterContactBar /> : null;
};
  return (
    <>

     <Cursor />
    <ScrollToTopButton />
     
    <Router>
        <ScrollToTop />
      <Navbar />
      <Routes>
           
        <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/journey" element={<Journey />} />
        <Route path="/about/experience" element={<Experience />} />
        <Route path="/about/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/about/certifications" element={<Certification />} />
        <Route path="/about/journey" element={<Journey />}/>
        <Route path="/about/early-spark" element={<EarlySpark />} />
        <Route path="/skills" element={<SkillsSection />} />
      </Routes>
     <ConditionalFooter />
    </Router>
      </>
  );
}

export default App;

