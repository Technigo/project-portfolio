import { SectionHead } from "../components/SectionHead.jsx";
import "./Tech.css";

export const Tech = () => {
  const headlineId = 2;
  return (
    <div className="tech-container">
      <div className="tech-title">
        <SectionHead headlineId={headlineId} />
      </div>
      <div className="tech-content">
        <p>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, <br />React Hooks, Node.js,
          MongoDB, Web Accessibility, API:s, <br /> GitHub, mob-programming,
          pair-programming, code review
        </p>
      </div>
    </div>
  );
};
