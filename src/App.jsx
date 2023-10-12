import { useRef, useState, useEffect } from "react";
import { Hero } from "./components/sections/Hero";
import { Tech } from "./components/sections/Tech";
import { Projects } from "./components/sections/Projects";
import { Blog } from "./components/sections/Blog";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Button } from "./components/ui/Button";

import "./styles/reset.css";
import "./styles/global.scss";

function App() {
  const arrowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      console.log(scrolled);

      if (scrolled > 1000) {
        setVisible(true);
      } else if (scrolled <= 1000) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <main>
      <Hero arrowRef={arrowRef} />
      <Tech arrowRef={arrowRef} />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
      <button
        onClick={scrollToTop}
        className="toTop-btn"
        style={{ display: visible ? "inline" : "none" }}
      >
        <img src="/icons/arrow.svg" />
      </button>
    </main>
  );
}

export default App;
