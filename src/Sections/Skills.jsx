import { Headline } from "./Headline";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Headline text="Skills" level={1} className="skills-h1" />
      <Headline text="Code" level={2} className="code-h2" />
      <Headline text="Toolbox" level={2} className="toolbox-h2" />
      <Headline text="Upcoming" level={2} className="upcoming-h2" />
      <Headline text="More" level={2} className="upcoming-h2" />
    </div>
  );
};
