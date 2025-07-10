// import React from "react";

// const SectionTabs = () => {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const yOffset = -10000; // Adjust offset to keep SectionTabs visible
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({
//         top: y,
//         behavior: "smooth",
//       });
//     }
//   };



//   return (
//     <div className="section-tabs">
//       <button onClick={() => scrollToSection("experience")}>Experience</button>
//       <button onClick={() => scrollToSection("education")}>Education</button>
//       <button onClick={() => scrollToSection("projects")}>Projects</button>
//     </div>
//   );
// };

// export default SectionTabs;



// import React from "react";


// const SectionTabs = () => {
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="section-tabs">
//       <button onClick={() => scrollToSection("experience")}>Experience</button>
//       <button onClick={() => scrollToSection("education")}>Education</button>
//       <button onClick={() => scrollToSection("projects")}>Projects</button>
//     </div>
//   );
// };

// export default SectionTabs;
