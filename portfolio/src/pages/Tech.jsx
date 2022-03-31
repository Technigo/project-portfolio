import React from 'react';
import { Container } from '../components-styled/Container';

const Tech = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading fw-bold montserrat">
          <span className="heading-block">TECH</span>
        </h2>
        <div className="tech-container montserrat fw-normal fs-normal">
          <p>
            HTML5, CSS3, JavaScript ES6, React, React Hooks, JSX, Redux,
            Node.js, Mongo DB, Web Accessibility, API:s, mob-programming,
            pair-programming, Github.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Tech;
