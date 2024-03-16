import "./LetsTalk.css";
import caroLImage from "../../assets/CaroL.jpg";
import linkedInIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/talk-github.svg";

export const LetsTalk = () => {
  return (
    <div className="contact-wrapper">
      <h1>Let&apos;s Talk</h1>
      <div className="contact-content">
        <img src={caroLImage} alt="Profile" className="profile-image" />
        <div className="contact-text">
          <p>Carolina Luna</p>
          <p>+46(0)72 737 78 37</p>
          <p>kroluna@gmail.com</p>
        </div>
        <div className="social-media-icons">
          <a
            href="https://www.linkedin.com/in/carolina-luna-b1659251/"
            target="_blank"
            rel="noreferrer">
            <img src={linkedInIcon} alt="LinkedIn link" />
          </a>
          <a href="https://github.com/Kroluna" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github link" />
          </a>
        </div>
      </div>
    </div>
  );
};
