import React from "react";
import { Container } from "../components-styled/Container";
import linkedin from "../assets/linkedin-orange.png";
import github from "../assets/github-orange.png";
import stackoverflow from "../assets/stackoverflow-orange.png";

const More = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading fw-bold montserrat">
          <span className="heading-block">FOR MORE</span>
        </h2>
        <div className="footer-icons-container">
          <div className="footer-icons-text roboto">
            <a
              href="https://www.linkedin.com/in/michaelchangdk/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-icon-wrapper">
                <img
                  alt="Linked-in Link"
                  className="footer-icon"
                  src={linkedin}
                />
              </div>
            </a>
            <h4 className="color-font" aria-hidden="true">
              LINKEDIN
            </h4>
          </div>
          <div className="footer-icons-text roboto">
            <a
              href="https://github.com/michaelchangdk"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-icon-wrapper">
                <img alt="Github Link" className="footer-icon" src={github} />
              </div>
            </a>
            <h4 className="color-font" aria-hidden="true">
              GITHUB
            </h4>
          </div>
          <div className="footer-icons-text roboto">
            <a
              href="https://stackoverflow.com/users/17890555/michael-chang"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-icon-wrapper">
                <img
                  alt="Stack Overflow Link"
                  className="footer-icon"
                  src={stackoverflow}
                />
              </div>
            </a>
            <h4 className="color-font" aria-hidden="true">
              STACK OVERFLOW
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default More;
