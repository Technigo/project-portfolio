import { useState } from "react";
// import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Scenes/Intro/Intro";
import { Tech } from "./components/Scenes/Tech/Tech";
import { Projects } from "./components/Scenes/Projects/Projects";
import { Articles } from "./components/Scenes/Articles/Articles";
import { Skills } from "./components/Scenes/Skills/Skills";
import { Contact } from "./components/Scenes/Contact/Contact";

export const App = () => {
  return (
    <div className="wrapper">
      {/* <Navbar /> */}
      <Intro />
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
    </div>
  );
};
