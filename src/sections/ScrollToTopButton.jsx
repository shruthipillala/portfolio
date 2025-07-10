import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // optional icon
import "../styles/ScrollToTopButton.css"; // import your styles
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
