import "./tech.css";
import { Header } from "../common/Header";
import { Paragraph } from "../common/Paragraph";

export const Tech = ({ refProp }) => {
  const techText =
    "HTML, CSS, Flexbox, JavaScript, ES7, JSX, React, React Hooks, Node.js, Web Accessibility, APIs, MongoDB, mob-programming, pair-programming, GitHub.";

  return (
    <section className="tech-section" ref={refProp} tabIndex="1">
      <section className="tech-wrapper">
        <Header level={1} text="Tech" className="tech-heading" />
        <Paragraph text={techText} className="tech-paragraph" />
      </section>
    </section>
  );
};
