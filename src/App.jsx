import "./App.css";
import { About } from "./components/About/About";
import { Tech } from "./components/Tech/Tech";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

export const App = () => {
  return (
    <>
      <About />
      <Tech />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};
