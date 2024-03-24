import { Introduction } from "./components/Introduction";
import { Tech } from "./components/Tech";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <Project />
      {/* <Articles/> */}
      <Skills />
      <Contact />
    </div>
  );
};
