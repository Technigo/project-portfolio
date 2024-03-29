import "./Tech.css";
import { Heading } from "../heading/Heading";

export const Tech = () => {
  return (
    <section className="flex tech-section">
      <div className="flex tech-container">
        <Heading level="2" text="Tech" className="white" />
        <Heading
          level="4"
          text=" HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
          Github"
          className="white"
        />
      </div>
    </section>
  );
};
