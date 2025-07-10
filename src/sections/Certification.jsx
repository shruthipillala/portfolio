import React from "react";
import "../styles/Certification.css";
import { Award, Stamp,PencilLine,FileCheck2,Library,ClipboardCheck,CheckCircle, BookOpen,BookCheck, Medal,FileBadge } from "lucide-react";

const certifications = [
  
  {
    icon: <Award size={28} />,
    title: "Hands-on Cloud Computing with AWS",
    issuer: "Microsoft Learn Student Ambassadors",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z1fVRS1"
  },
  {
    icon:<Stamp size={28} /> ,
    title: "Front-End Web Development Bootcamp",
    issuer: "Microsoft Learn Student Ambassadors",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/ZoitnW"
  },
   {
    icon: <PencilLine size={28} />   ,
    title: "Instagram Clone using HTML,CSS",
    issuer: "Devtown",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/B6m80"
  },
   {
    icon: <FileCheck2 size={28} />          ,
    title: "Front-End Web Development Bootcamp",
    issuer: "Devtown",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z1Iqaia"
  },
   {
    icon: <BookCheck size={28} />,
    title: "Instagram Clone using HTML,CSS",
    issuer: "Google Developer Student Club",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/ZJK9XR"
  },

    {
    icon: <BookCheck size={28} />,
    title: "Instagram Clone using HTML,CSS",
    issuer: "Microsoft Learn Student Ambassadors",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/12AiCV"
  },
  {
    icon: <ClipboardCheck size={28} /> ,
    title: "Hands-on Cloud Computing with AWS",
    issuer: "Google-Developer Student Club",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/16k65K"
  },
  {
    icon: <CheckCircle size={28} />         ,
    title: "Front-End Web Development Bootcamp",
    issuer: "Google-Developer Student Club",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z1es8EL"
  },
  {
    icon: <BookCheck size={28} />,
    title: "Web Animation Using AdvancedJavascript & CSS",
    issuer: "Microsoft Learn Student Ambassadors",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/ZAYaiG"
  },
  {
    icon: <BookOpen size={28} /> ,
    title: "Hands-on Cloud Computing with AWS",
    issuer: "Devtown",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z2k7Hpo"
  },
   {
    icon: <Medal size={28} />,
    title: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn Learning",
    year: "2023",
    link: "/CertificateOfCompletion_Become a FullStack Web Developer.pdf"
  },
    {
    icon: <BookCheck size={28} />,
    title: "Web Animation Using AdvancedJavascript & CSS",
    issuer: "Google Developer Student Club",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z8V3Kf"
  },
   {
    icon: <BookCheck size={28} />,
    title: "Tinder Clone using HTML,CSS",
    issuer: "Google Developer Student Club",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/Z2bnzCE"
  },
   {
    icon: <BookCheck size={28} />,
    title: "Web Animation Using AdvancedJavascript & CSS",
    issuer: "Devtown",
    year: "2023",
    link: "https://www.cert.devtown.in/verify/eDUlo"
  },
  // {
  //   icon: <FileBadge size={28} />,
  //   title: "C# Intermediate: Classes, Interfaces and OOP",
  //   issuer: "Udemy",
  //   year: "2023",
  //   link: "ude.my/UC-25704770-1c84-4e68-9dd1-4269303b35ba"
  // }
];

const Certification = () => {
  return (
    <section className="certification-section">
      <h2 className="certification-title">Certifications</h2>
      <p className="certification-intro">
        Here are some of the certifications and bootcamps I’ve completed as part of my continuous self-paced learning and professional development journey.
      </p>

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer} &bull; {cert.year}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-link">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
