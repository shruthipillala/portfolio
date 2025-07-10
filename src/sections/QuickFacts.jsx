import React from "react";
import { Globe, Code,Database, Server } from "lucide-react";
import {
  Sparkles,
  BrainCircuit,
  Users,
  Award,
  HeartHandshake,
  BookOpen,
  BarChart,
  Lightbulb,
  
  Target
} from "lucide-react";

import "../styles/QuickFacts.css"; // Create this CSS

const facts = [
 
  {
    icon: <Code size={28} />,
    title: "Problem Solver",
    desc: "Solved 75 DSA problems on LeetCode, mastering algorithms & data structures",
  },
  {
    icon:  <Globe size={28} />,
    title: "Open Source Contributor",
    desc: "Collaborating on projects like Zero Hunger, improving social impact tech",
  },

   {
    icon: <Sparkles size={28} />,
    title: "Creative Thinker",
    desc: "Enjoys solving complex problems with clean, efficient logic.",
  },

  {
    icon: <Users size={28} />,
    title: "Team Collaborator",
    desc: "Works well in fast-paced, collaborative environments.",
  },
  {
    icon: <Award size={28} />,
    title: "Detail-Oriented",
    desc: "Focuses on writing scalable and maintainable code.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Empathetic Communicator",
    desc: "Bridges technical ideas with non-technical teams smoothly.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Academic Excellence",
    desc: "Graduated with strong fundamentals in Computer Science.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Perspective",
    desc: "Experienced working across remote teams and diverse projects.",
  },
  {
    icon: <Target size={28} />,
    title: "Goal-Driven",
    desc: "Thrives on achieving outcomes that create real impact.",
  },
  {
  icon: <BarChart size={28} />,
  title: "Impact-Oriented",
  desc: "Prioritizes delivering measurable outcomes over just outputs.",
},
{
  icon: <Lightbulb size={28} />,
  title: "Proactive Leader",
  desc: "Takes initiative in projects and mentors peers to build strong teams.",
}


 
];

const QuickFacts = () => {
  return (
    <section className="quick-facts">
      <h2>
        Quick Facts <span>About Me</span>
      </h2>
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div className="fact-card" key={index}>
            <div className="icon-box">{fact.icon}</div>
            <h3>{fact.title}</h3>
            <p>{fact.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickFacts;
