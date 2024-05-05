import { Headline } from "../components/Headline/Headline";
import "./Tech.css";

export const Tech = () => {
  return (
    <>
      <section className="tech-section">
        <Headline headlineStyle="section-headline" headline="Tech" />
        <p>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming,
          Github.
        </p>
      </section>
      <div className="wavy-border"></div>
    </>
  );
};
