import "./Tech.css";
import { H2, BodyText } from "../../ui/Typography/Typography";

export const Tech = () => {
  return (
    <section className="tech-section">
      <div className="tech-content-section">
        <H2>Tech</H2>
        <BodyText>
          HTML, CSS, Flexbox, JavaScript, ES6,
          JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, APIs,
          mob-programming, pair-programming, GitHub.
        </BodyText>
      </div>
    </section>
  );
};