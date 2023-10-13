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
import { ScrollButton } from "./components/ui/ScrollButton/ScrollButton";

function App() {
  const arrowRef = useRef(null);

  return (
    <main>
      <Hero arrowRef={arrowRef} />
      <Tech arrowRef={arrowRef} />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <ScrollButton />
      <Footer />
    </main>
  );
}

export default App;
