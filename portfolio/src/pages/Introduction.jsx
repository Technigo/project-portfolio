import React from "react";
import { Container } from "../components-styled/Container";

const Introduction = () => {
  return (
    <section>
      <Container>
        <div className="fs-normal montserrat fw-normal">
          <p>
            <span className="line"></span>
            <span className="dot"></span> Hello! I&apos;m a frontend developer
            with fullstack ambitions, with previous experience as a project
            manager in a consulting firm working with large datasets and custom
            web application integrations. I&apos;m solution-oriented, a fast
            learner, and passionate about creating beautiful, accessible
            applications.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
