import { useRef, useState, useEffect } from "react";
import { Hero } from "../../components/sections/Hero";
import { Tech } from "../../components/sections/Tech";
import { Projects } from "../../components/sections/Projects";
import { Blog } from "../../components/sections/Blog";
import { Skills } from "../../components/sections/Skills";
import { Contact } from "../../components/sections/Contact";
import { Footer } from "../../components/sections/Footer";
import { ScrollButton } from "../../components/ui/ScrollButton";

function Home({ lang, onLang }) {
  const arrowRef = useRef(null);

  return (
    <>
      <main>
        <Hero arrowRef={arrowRef} lang={lang} onLang={onLang} />
        <Tech arrowRef={arrowRef} />
        <Projects lang={lang} />
        <Blog />
        <Skills />
        <Contact />

        <ScrollButton />
        <Footer />
      </main>
    </>
  );
}

export default Home;
