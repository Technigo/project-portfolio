import { MainHeading } from "../MainHeading/MainHeading";
import "./Tech.css";

export const Tech = () => {
  const skills =
    "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. ";

  return (
    <section className="tech-section">
      <div className="tech-wrapper">
        <div>
          <MainHeading className={"heading-text tech"} text={"Tech"} />
        </div>

        <div className="skills-text-box">
          <p className="skills-text">{skills}</p>
        </div>
      </div>
    </section>
  );
};
