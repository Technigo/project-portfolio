import "./Tech.css";
import PropTypes from 'prop-types';

export const Tech = ({ techSectionRef }) => {
  return (
    <section className="tech-container" ref={techSectionRef}>
      <div className="tech-wrapper">
        <h2 className="tech-heading">Tech</h2>
        <p className="large">
          HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks,
          Node.js, Npm, Web Accessibility, APIs, mob-programming,
          pair-programming, GitHub.
        </p>
      </div>
    </section>
  );
};

Tech.propTypes = {
  techSectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};