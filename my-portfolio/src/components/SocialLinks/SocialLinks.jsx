// SocialLinks.jsx

import LinkedIn from "../../assets/linkedIn.svg";
import Github from "../../assets/github.svg"
import Stackoverflow from "../../assets/stackoverflow.svg"
import Instagram from "../../assets/instagram.svg"
import "./SocialLinks.css";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <button className="svg-button">
        <a
          href="https://www.linkedin.com/in/emelie-nyberg-kedert-753542111/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={LinkedIn} alt="SVG Icon" />
        </a>
      </button>

      <button className="svg-button">
        <a
          href="https://github.com/EmelieNyberg"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Github} alt="SVG Icon" />
        </a>
      </button>

      <button className="svg-button">
        <a
          href="https://stackoverflowteams.com/c/technigo/users/656/?tab=profile"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Stackoverflow} alt="SVG Icon" />
        </a>
      </button>

      <button className="svg-button">
        <a
          href="https://www.instagram.com/emeliekedert/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Instagram} alt="SVG Icon" />
        </a>
      </button>
    </div>
  );
};
