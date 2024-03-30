import "./Tech.css";
import { Heading } from "../heading/Heading";

export const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="heading-wrapper">
          <Heading level="2" text="Tech" className="light" />
        </div>
        <div className="tech-wrapper">
          <Heading
            level="4"
            text=" HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
          Github"
            className="light"
          />
        </div>
      </div>
    </section>
  );
};
