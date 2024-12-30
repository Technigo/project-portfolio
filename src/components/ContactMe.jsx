import { Grid } from "./ui/Grid";
import NE from "../assets/NE-linkedin.jpg";
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
            <button className="btn-icon" onClick={() => window.open("https://github.com/nella-x")}>
              <img alt="GitHub" src={GH} />
            </button>
            <button className="btn-icon" onClick={() => window.open("https://www.linkedin.com/in/nella-edvardsson-018460300/")}>
              <img alt="LinkedIn" src={LI} />
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
};
