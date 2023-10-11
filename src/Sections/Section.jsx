//import { Headline } from "./Headline";
import { Intro } from "./Intro";
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
        <div className="projectCard">
          <p>Group number 2 is making Project Card. We just adjusted the css</p>
        </div>
      </div>
    </>
  );
};
