import { Headline } from "./Headline";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Headline text="Skills" level={1} className="skills-h1" />
      <div className="skill-content-container">
        <Headline text="Code" level={2} className="code-h2" />
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Components</p>
        <p>Github</p>

        <Headline text="Toolbox" level={2} className="toolbox-h2" />
        <p>Adobe Photoshop</p>
        <p>Adobe Illustrator</p>
        <p>Adobe Indesign</p>
        <p>Figma</p>
        <p>Slack</p>
        <p>Stack Overflow</p>
        <p>Netlify</p>

        <Headline text="Upcoming" level={2} className="upcoming-h2" />
        <p>Node.js</p>
        <p>Redux</p>

        <Headline text="More" level={2} className="more" />
        <p>write some</p>
      </div>
    </div>
  );
};
