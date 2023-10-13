import { Headline } from "./Headline";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Headline text="Skills" level={1} className="skills-h1" />
      <div className="skill-content-container">
        <Headline text="Code" level={2} className="code-h2" />
        <p> HTML CSS JavaScript React Components Github </p>
        <Headline text="Toolbox" level={2} className="toolbox-h2" />
        <p>
          Adobe Photoshop Adobe Illustrator Figma Slack StackOverflow Netlify
        </p>
        <Headline text="Upcoming" level={2} className="upcoming-h2" />
        <p>Node.js</p>
        <Headline text="More" level={2} className="more" />
        <p>som som som</p>
      </div>
    </div>
  );
};
