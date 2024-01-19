import { Headline } from "./Headline";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Headline text="Skills" level={1} className="skills-h1" />
      <div className="skill-content-container">
        <div className="code">
          <Headline text="Code" level={2} className="code-h2" />
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Components</p>
          <p>Github</p>
          <p>MongoDB</p>
          <p>Models</p>
          <p>Node.js</p>
        </div>

        <div className="toolbox">
          <Headline text="Toolbox" level={2} className="toolbox-h2" />
          <p>Adobe Photoshop</p>
          <p>Adobe Illustrator</p>
          <p>Adobe Indesign</p>
          <p>Figma</p>
          <p>Postman</p>
        </div>

        {/* <div className="upcoming">
          <Headline text="Upcoming" level={2} className="upcoming-h2" />
          <p>Fullstack Project</p>
        </div> */}

        <div className="more">
          <Headline text="More" level={2} className="more-h2" />
          <p>Slack</p>
          <p>Stack Overflow</p>
          <p>Netlify</p>
          <p>Collaborative Work</p>
          <p>Strategy</p>
          <p>Agile Methodology</p>
          <p>Fullstack Project</p>
        </div>
      </div>
    </div>
  );
};
