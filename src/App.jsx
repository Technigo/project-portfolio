import "./App.css";
import { useRef } from "react";
import { Introduction } from "./Sections/Header/Introduction.jsx";
import { ImageComponent } from "./ReusableComponents/ImageElements/ImageComponent";
import { Tech } from "./Sections/Tech/Tech.jsx";
import { FeaturedProjects } from "./Sections/Projects/FeaturedProjects";
import { Articles } from "./Sections/Articles/Articles";
import { Skills } from "./Sections/Skills/Skills";
import { Footer } from "./Sections/Footer/Footer";
import { FooterNameBanner } from "./Sections/Footer/FooterNameBanner";

// Creates a visually hidden focusable element, so that tabIndex can be used. Otherwise it jumps directly to the buttons. Only used on the sections before all the buttons start
const VisuallyHidden = ({ children }) => (
  <span style={{ position: "absolute", clip: "rect(0 0 0 0)", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden" }}>
    {children}
  </span>
);

// Main component to render all the child components.
export const App = () => {

  // Sets a useRef default as null and saves it in the variable name techSectionRef
  const techSectionRef = useRef(null);

  // Function to handle the scroll effect on techSectionRef
  const handleScrollToTech = () => {
    techSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-wrapper">

      {/* Introduction section */}
      <VisuallyHidden tabIndex="0" aria-hidden="false">Focus on Introduction Section</VisuallyHidden>
      <Introduction tabIndex="-1" />

      {/* Arrow Image (Tabbable) */}
      {/* Handles the Scroll effect onclick of the arrow */}
      <a href="#tech-link" onClick={handleScrollToTech} >
        <ImageComponent
          sectionClassName={"arrow-divider"}
          elementClassName={"image"}
          link={"/assets/arrow.svg"}
          ImageAltText={"Follow arrow down"}
          tabIndex="1"
        />
      </a>
      {/* The refrence for the scroll-effect on the arrow */}
      {/* Tech Section (Tabbable) */}
      <section ref={techSectionRef}>
        <VisuallyHidden tabIndex="2" aria-hidden="false">Focus on Tech Section</VisuallyHidden>
        <Tech tabIndex="-1" />
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Articles Section */}
      <Articles id="articles-link" />

      {/* Skills Section */}
      <Skills />

      {/* Footer Section */}
      <Footer />

      {/* Footer Name Banner Section */}
      <FooterNameBanner />
    </main>
  )
}