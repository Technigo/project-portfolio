import { MainHeading } from "../Headings/MainHeading/MainHeading.jsx";
import { SubHeading } from "../Headings/SubHeading/SubHeading.jsx";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <MainHeading className={"skills-h2"} text={"Skills"} />
      <div className="skills-wrapper">
        <div className="code-skills-wrapper">
          <SubHeading className={"skills-h3 code"} text={"Code"} />
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
              <p>Mongo DB</p>
            </li>
            <li>
              <p>Zustand</p>
            </li>
            <li>
              <p>Node.js</p>
            </li>
            <li>
              <p>Styled Components</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper">
          <SubHeading className={"skills-h3 toolbox"} text={"Toolbox"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>VS Code</p>
            </li>
            <li>
              <p>GitHub</p>
            </li>
            <li>
              <p>Stack Overflow</p>
            </li>
            <li>
              <p>CodePen</p>
            </li>
            <li>
              <p>Postman</p>
            </li>
            <li>
              <p>Lottie Files</p>
            </li>
            <li>
              <p>Figma</p>
            </li>
            <li>
              <p>Canva</p>
            </li>
            <li>
              <p>Netlify</p>
            </li>
            <li>
              <p>Render</p>
            </li>
            <li>
              <p>Slack</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper">
          <SubHeading className={"skills-h3 upcoming"} text={"Upcoming"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>React Native</p>
            </li>
          </ul>
        </div>
        <div className="code-skills-wrapper">
          <SubHeading className={"skills-h3 more"} text={"More"} />
          <ul className="skills-list-wrapper">
            <li>
              <p>Agile methodology</p>
            </li>
            <li>
              <p>Team work</p>
            </li>
            <li>
              <p>Soft skills</p>
            </li>
            <li>
              <p>Problem solver</p>
            </li>
            <li>
              <p>Design interest</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
