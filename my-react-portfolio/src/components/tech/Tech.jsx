import "./tech.css";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";

export const Tech = ({ refProp }) => {
  const techText =
    "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.";

  return (
    <section className="tech-section" ref={refProp} tabIndex="1">
      <section className="tech-wrapper">
        <Header level={1} text="Tech" className="tech-heading" />
        <Paragraph text={techText} className="tech-paragraph" />
      </section>
    </section>
  );
};
