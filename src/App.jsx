import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Headline } from "./Components.jsx/Headlines";
import { Presentation } from "./Components.jsx/Presentation";
import { Tech } from "./Components.jsx/Tech";
// import { ProjectCard } from "./Components.jsx/ProjectCard";
import { MyWords } from "./Components.jsx/MyWords";
import { Skills } from "./Components.jsx/Skills";
import { Contact } from "./Components.jsx/Contact";
import { Footer } from "./Components.jsx/Footer";

function App() {
  return (
    <>
      <Presentation />
      <Headline />
      <Tech />
      {/* <ProjectCard /> */}
      <MyWords />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
