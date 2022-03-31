import React from 'react';
import { Container } from '../components-styled/Container';
import profilePicture from '../assets/profile.jpeg';
import linkedin from '../assets/linkedin-white.png';
import github from '../assets/github-white.png';
import stackoverflow from '../assets/stackoverflow-white.png';

const Header = () => {
  return (
    <header>
      <Container>
        <div className="socials-icon-container">
          <a
            href="https://www.linkedin.com/in/michaelchangdk/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="header-icon-wrapper">
              <img
                alt="Linkedin Link"
                className="socials-icon"
                src={linkedin}
              />
            </div>
          </a>
          <a
            href="https://github.com/michaelchangdk"
            target="_blank"
            rel="noreferrer"
          >
            <div className="header-icon-wrapper">
              <img alt="Github Link" className="socials-icon" src={github} />
            </div>
          </a>
          <a
            href="https://stackoverflow.com/users/17890555/michael-chang"
            target="_blank"
            rel="noreferrer"
          >
            <div className="header-icon-wrapper">
              <img
                alt="Stack Overflow Link"
                className="socials-icon"
                src={stackoverflow}
              />
            </div>
          </a>
        </div>
        <div className="header-texts">
          <h4 className="header-name roboto">
            <span className="fw-normal" aria-label="Porfolio: Michael Chang">
              PORTFOLIO:{' '}
            </span>
            <span className="fw-bold" aria-hidden="true">
              MICHAEL CHANG
            </span>
          </h4>
          <h1
            className="header-title montserrat fw-bold"
            aria-label="front-end developer, and project manager"
          >
            frontend
          </h1>
          <h1 className="header-title montserrat fw-bold" aria-hidden="true">
            developer
          </h1>
          <h2 className="header-subtitle montserrat fw-bold" aria-hidden="true">
            + project manager
          </h2>
        </div>
        <div className="profile-picture-container">
          <img
            alt="Portrait of Michael Chang"
            className="profile-picture"
            src={profilePicture}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
