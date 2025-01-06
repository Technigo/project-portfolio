import React from "react";
import { Introduction } from "./Components/Introduction/Introduction";
import { Tech } from "./Components/Tech/Tech";
import { Skills } from "./Components/Skills/Skills";
import { LetsTalk } from "./Components/LetsTalk/LetsTalk";
import { Footer } from "./Components/Footer/Footer";
import { Projects } from "./Components/Projects/Projects";




function App() {
  return (
    <div>
      <Introduction />
      <Tech />
      <Skills />
      <Projects />
      <LetsTalk />
      <Footer />

    </div>
  );
}

export default App;

