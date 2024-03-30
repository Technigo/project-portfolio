import "./App.css";
import { About } from "./components/About/About";
import { Tech } from "./components/Tech/Tech";
import { Projects } from "./components/Projects/Projects";

export const App = () => {
  return (
    <>
      <About />
      <Tech />
      <Projects />
    </>
  );
};
