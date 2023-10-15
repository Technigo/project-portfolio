import { MainHeading } from "../Headings/MainHeading/MainHeading.jsx";
import { SubHeading } from "../Headings/SubHeading/SubHeading.jsx";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <MainHeading className={"skills-h2"} text={"Skills"} />
        <div className="code-skills-wrapper code">
          <SubHeading className={"skills-h3"} text={"Code"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>HTML5</p>
            </li>
            <li>
              <p>CSS3</p>
            </li>
            <li>
              <p>Javascript ES6</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Styled Components</p>
            </li>
            <li>
              <p>GitHub</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper toolbox">
          <SubHeading className={"skills-h3"} text={"Toolbox"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>Atom</p>
            </li>
            <li>
              <p>Postman</p>
            </li>
            <li>
              <p>Adobe Photoshop</p>
            </li>
            <li>
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <p>Figma</p>
            </li>
            <li>
              <p>Canva</p>
            </li>
            <li>
              <p>Keynote</p>
            </li>
            <li>
              <p>Slack</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper upcoming">
          <SubHeading className={"skills-h3"} text={"Upcoming"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>Node.js</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper more">
          <SubHeading className={"skills-h3"} text={"More"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>Design Lead</p>
            </li>
            <li>
              <p>Branding</p>
            </li>
            <li>
              <p>Strategy</p>
            </li>
            <li>
              <p>Process design</p>
            </li>
            <li>
              <p>Concept development</p>
            </li>
            <li>
              <p>Agile methodology</p>
            </li>
            <li>
              <p>Hyper Island toolbox</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
