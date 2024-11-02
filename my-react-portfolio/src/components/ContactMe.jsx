import { Grid } from "./ui/Grid";
import NE from "../assets/NE-linkedin.jpg";
import STO from "../assets/stackoverflow.svg";
import GH from "../assets/github.svg";
import LI from "../assets/linkedin.svg";

import './ContactMe.css';

export const ContactInfo = () => {
  return (
    <Grid background="white">
      <div className="contact-container">
        <h2>Let’s Talk</h2>
        <div className="contact-content">
          <img className="contact-image" src={NE} alt="Profile" />
          <div className="contact-details">
            <p>Nella Edvardsson</p>
            <p>+46(0)705 11 65 11</p>
            <p className="contact-email">nellax@me.com</p>
          </div>
          <div className="icons">
            <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
              <img className="ic-web" alt="Stack Overflow" src={STO} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img className="ic-web" alt="GitHub" src={GH} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="ic-web" alt="LinkedIn" src={LI} />
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
};
