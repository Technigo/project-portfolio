import { Introduction } from "./components/Introduction";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Project";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

import "./App.css";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Tech />
      <Projects />
      {/* <Articles/> */}
      <Skills />
      <Contact />
    </div>
  );
};
