import "./App.css";
import { About } from "./components/About/About";
import { Tech } from "./components/Tech/Tech";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

export const App = () => {
  return (
    <>
      <About />
      <Tech />
      <Projects />
      <Skills />
    </>
  );
};
