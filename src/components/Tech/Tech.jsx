import { MainHeading } from "../Headings/MainHeading/MainHeading";
import "./Tech.css";

export const Tech = () => {
  return (
    <div className="tech-container">
      <div className="tech-wrapper">
        <MainHeading className={"tech-h2"} text={"Tech"} />
        <div className="techstack-wrapper">
          <p>
            HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks,
            Node.js, Mongo DB, Web Accessibility, API:s, mob-programming,
            pair-programming, Github.
          </p>
        </div>
      </div>
    </div>
  );
};
