import { Heading } from "../ui/Heading"
import "./Tech.css"

export const Tech = () => {
  return (
    <div className="tech-card">
      <Heading heading="Tech" className="tech-heading" level={2} />
      <div className="tech-text">
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
      </div>
    </div>
  );
};
