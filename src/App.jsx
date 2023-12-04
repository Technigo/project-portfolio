import { useState } from "react";
import "./App.css";
import { Headline } from "./Components.jsx/Headlines";
import { Presentation } from "./Components.jsx/Presentation";
import { Tech } from "./Components.jsx/Tech";
// import { Project } from "./Components.jsx/Project";
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
      {/* <Project /> */}
      <MyWords />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
