import "./TechSection.css";
import Heading from "./Heading";

export const TechSection = () => {
  return (
    <div className="tech-section">
      <Heading text="Tech" />
      <p className="tech-text">
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
        Mongo DB, Web Accessibility, API:s, <br />
        mob-programming, pair-programming, Github.
      </p>
    </div>
  );
};
