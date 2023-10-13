//import { Headline } from "./Headline";
import { Articles } from "./Articles";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import "./Section.css";
import { Tech } from "./Tech";
import { Skills } from "./Skills";

export const Section = () => {
  return (
    <>
      <div className="projectGrid">
        <Intro />

        <Tech />

        <Projects />

        <Articles />

        <Skills />
      </div>
    </>
  );
};
