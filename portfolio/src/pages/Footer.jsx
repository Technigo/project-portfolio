import React from 'react';
import { Container } from '../components-styled/Container';

const Footer = () => {
  return (
    <footer className="montserrat">
      <Container>
        <h2 className="contact-header fw-bold">CONTACT</h2>
        <p className="contact-text">Michael Chang</p>
        <p className="contact-text">+45 42 72 62 27</p>
        <p>
          <a className="contact-text" href="mailto:michaelchangdk@icloud.com">
            michaelchangdk@icloud.com
          </a>
        </p>
        <br />
        <div className="attribution">
          <p>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/pixel-perfect">
              Pixel perfect
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
