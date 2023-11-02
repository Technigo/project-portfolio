import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "../../components/sections/Hero";
import { Tech } from "../../components/sections/Tech";
import { Projects } from "../../components/sections/Projects";
import { Blog } from "../../components/sections/Blog";
import { Skills } from "../../components/sections/Skills";
import { Contact } from "../../components/sections/Contact";
import { Footer } from "../../components/sections/Footer";
import { ScrollButton } from "../../components/ui/ScrollButton";
import { ScrollToTop } from "../../components/ui/ScrollToTop";

function Home({ lang, onLang }) {
  const arrowRef = useRef(null);

  // animation for scroll bar on the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <ScrollToTop />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Hero arrowRef={arrowRef} lang={lang} onLang={onLang} />
      <Tech arrowRef={arrowRef} />
      <Projects lang={lang} />
      {/* <Blog /> */}
      <Skills />
      <Contact />
      <ScrollButton />
      <Footer />
    </main>
  );
}

export default Home;
