import "./Body.css";
import { useState, useEffect } from "react";
import { useRef } from "react"; // Import useRef hook for referencing DOM elements
import { ProgressBar } from "/src/components/bar/ProgressBar";
import { Header } from "/src/sections/header/Header";
import { Tech } from "/src/sections/tech/Tech";
import { Projects } from "/src/sections/projects/Projects";
import { Articles } from "/src/sections/myWords/Articles";
import { Skills } from "/src/sections/skills/Skills";
import { Footer } from "/src/sections/footer/Footer";
import { FooterBanner } from "/src/sections/footer/FooterBanner";
import arrowImage from "/assets/arrow.svg";

export const Body = () => {
  // State variable to track the scroll progress percentage
  const [progress, setProgress] = useState(0);

  // Function to calculate and update scroll progress
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setProgress(scrollProgress);
  };

  // Use useEffect to set up an event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reference for the Tech section to enable smooth scrolling
  const techSectionRef = useRef(null);

  // Function to scroll smoothly to the Tech section
  const handleScrollToTech = () => {
    techSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Return the structure of the Body component
  return (
    <div className="main-wrapper">
      {/* Display the progress bar and header */}
      <ProgressBar progress={progress} />
      <Header />
      {/* Link to scroll to the Tech section with smooth scrolling */}
      <a href="#tech-link" onClick={handleScrollToTech}>
        <section className="arrow-container">
          <img src={arrowImage} alt="Animated Arrow" className="arrow" />
        </section>
      </a>
      <Tech ref={techSectionRef} />
      <Projects />
      <Articles />
      <Skills />
      <Footer />
      <FooterBanner />
    </div>
  );
};
