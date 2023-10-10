import { MainHeading } from "../MainHeading/MainHeading";
import "./Tech.css";

export const Tech = () => {
  const skills =
    "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. ";

  return (
    <div className="tech-section">
      <div>
        <MainHeading className={"heading-text tech"} text={"Tech"} />
      </div>

      <div>
        <p className="skills-text">{skills}</p>
      </div>
    </div>
  );
};
