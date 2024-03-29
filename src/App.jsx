import "./App.css";
import { Introduction } from "./components/Introduction";
import { Card } from "./components/Card";
import { projects } from "../projects.json";

export const App = () => {
  return (
    <>
      <section>
        <Introduction />
      </section>
      <section>
        <div>
          <h1>Featured Projects</h1>
        </div>
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </section>
    </>
  );
};
