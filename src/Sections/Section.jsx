//import { Headline } from "./Headline";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import "./Section.css";
import { Tech } from "./Tech";

export const Section = () => {
  return (
    <>
      <div className="projectGrid">
        <div className="project-intro">
          <Intro />
        </div>
        <div className="projecttech">
          <Tech />
        </div>
        <div className="projects">
          <Projects />
        </div>
      </div>
    </>
  );
};
