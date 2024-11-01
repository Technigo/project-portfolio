import { Introduction } from "./components/introduction/Introduction";
import { Tech } from "./components/tech/Tech";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Ticker } from "./components/ticker/Ticker";

import "./App.css";

export const App = () => {
  return (
    <>
      <Introduction />
      <Tech />
      <Projects />
      <Skills />
      <Contact />
      <Ticker />
    </>
  );
};
