import React from 'react';
import { Container } from '../components-styled/Container';

const Introduction = () => {
  return (
    <section>
      <Container>
        <div className="fs-normal montserrat fw-normal">
          <p>
            <span className="line"></span>
            <span className="dot"></span> Hello! I'm a frontend developer with
            fullstack ambitions, with previous experience as a project manager
            in a consulting firm working with large datasets and custom web
            application integrations. I'm all about problem solving and creating
            awesome, centered DIVs.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
