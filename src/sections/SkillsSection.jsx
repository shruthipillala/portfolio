
// export default SkillsSection;

import { useMemo } from "react";
import { FaMicrosoft } from "react-icons/fa";
// import { SiAmazonaws } from "react-icons/si";
import {FaAws ,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaGithub, FaDatabase
} from "react-icons/fa";
import {
  SiPostgresql, SiMysql, SiTailwindcss, SiBootstrap,
  SiSpring, SiIntellijidea, SiPostman, SiRedis, SiStripe
} from "react-icons/si";

import { RiShieldKeyholeLine, RiBroadcastLine, RiRobot2Line } from "react-icons/ri";
import { TbApi, TbTopologyStar3 } from "react-icons/tb";
//import { TbBrandJavascript } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { motion } from "framer-motion";
import "../styles/SkillsSection.css";

// Reusable Animated Card with Balloon Effect
const AnimatedSkillCard = ({ icon, name }) => {
  const directions = [
    { x: -100, opacity: 0 },
    { x: 100, opacity: 0 },
    { y: 100, opacity: 0 },
  ];
  const initial = useMemo(() => directions[Math.floor(Math.random() * directions.length)], []);
  const delay = useMemo(() => Math.random() * 1.2, []);

  return (
    <motion.div
      className="skill-card"
      initial={initial}
      animate={{
        x: 0,
     
y: [0, -30, 8, -10, 0],

        
        opacity: 1
      }}
      whileHover={{ scale: 0.15 }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay
        },
        x: { duration: 0.6 },
        opacity: { duration: 0.6 },
        scale: {
          duration: 0.15,
          ease: "easeOut"
        }
      }}
    >
      {icon}
      <p>{name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Tech Stack</h2>
      <p className="skills-subtitle">Technologies I work with</p>

      <div className="skills-container">

        <div className="skill-row">
          <AnimatedSkillCard icon={<FaHtml5 size={40} color="#e34c26" />} name="HTML5" />
          <AnimatedSkillCard icon={<FaCss3Alt size={40} color="#264de4" />} name="CSS3" />
          <AnimatedSkillCard icon={<FaJs size={40} color="#f0db4f" />} name="JavaScript" />
          <AnimatedSkillCard icon={<FaReact size={40} color="#61DBFB" />} name="React.js" />
        </div>

        <div className="skill-row">
            <AnimatedSkillCard icon={<FaAws size={40} color="#FF9900" />} name="AWS" />
          <AnimatedSkillCard icon={<FaJava size={40} color="#f89820" />} name="Java" />
          <AnimatedSkillCard icon={<SiSpring size={40} color="#6db33f" />} name="Spring Boot" />
          
        </div>

        <div className="skill-row">
          <AnimatedSkillCard icon={<SiPostgresql size={40} />} name="PostgreSQL" />
          <AnimatedSkillCard icon={<SiMysql size={40} />} name="MySQL" />
          <AnimatedSkillCard icon={<SiTailwindcss size={40} />} name="TailwindCSS" />
          <AnimatedSkillCard icon={<SiBootstrap size={40} />} name="Bootstrap" />
        </div>

        <div className="skill-row">
          <AnimatedSkillCard icon={<FaGitAlt size={40} color="#f1502f" />} name="Git" />
          <AnimatedSkillCard icon={<FaGithub size={40} color="#000" />} name="GitHub" />
          <AnimatedSkillCard icon={<SiPostman size={40} color="#ff6c37" />} name="Postman" />
        </div>

        <div className="skill-row">
          <AnimatedSkillCard icon={<SiIntellijidea size={40} color="#0071C5" />} name="IntelliJ IDEA" />
          <AnimatedSkillCard icon={<DiVisualstudio size={40} color="#007ACC" />} name="VS Code" />
          {/* <AnimatedSkillCard icon={<TbBrandJavascript size={40} />} name="Excel" /> */}
        
<AnimatedSkillCard icon={<FaMicrosoft size={40} color="#217346" />} name="Excel" />

        </div>


{/* Cloud / AI / Payments */}
<div className="skill-row">
<AnimatedSkillCard icon={<FaDatabase size={40} color="#4DB33D" />} name="JPA / Hibernate" />

  <AnimatedSkillCard icon={<RiRobot2Line  size={40} />} name="OpenAI API" />
  <AnimatedSkillCard icon={<SiStripe size={40} />} name="Stripe" />
  <AnimatedSkillCard icon={<SiRedis size={40} />} name="Redis" />
</div>


{/* <div className="skill-row">
  <AnimatedSkillCard icon={<RiShieldKeyholeLine size={40} />} name="JWT / Auth" />
  <AnimatedSkillCard icon={<TbTopologyStar3 size={40} />} name="Microservices" />
</div> */}


{/* <div className="skill-row">
  <AnimatedSkillCard icon={<RiBroadcastLine size={40} />} name="WebSockets" />
  <AnimatedSkillCard icon={<TbApi size={40} />} name="REST APIs" />
</div> */}




      </div>
    </section>
  );
};

export default SkillsSection;

