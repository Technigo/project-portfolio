import { Heading } from "../ui/Heading"
import linkedInIcon from "../assets/Linkedin-icon.svg"
import githubIcon from '../assets/Github_Icon.svg'
import stackOverflowIcon from '../assets/Stack_Icon.svg'
import Twitter_Icon from "../assets/Twitter_Icon.svg"
import Instagram_Icon from "../assets/Instagram_Icon.svg"
import yourPhoto from "../assets/your-photo.jpg"
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact-section">
      <Heading heading="Let´s talk" level={2} className="contact-heading" />
      <div className="profile">
        <img src={yourPhoto} alt="Anna Hansen" className="profile-image" />
        <div className="contact-info">
          <p className="contact-name">Anna Hansen</p>
          <p className="phone">+46 (0) 73 39 92 75</p>
          <p className="email">annah80@gmail.com</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/anna-hansen-61333019/" target="_blank" rel="https://www.linkedin.com/in/anna-hansen-61333019/">
          <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Anna2024WebDev" target="_blank" rel="https://github.com/Anna2024WebDev">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="https://stackoverflow.com/">
          <img src={stackOverflowIcon} alt="Stack Overflow" className="social-icon" />
        </a>
        <a href="https://x.com/" target="_blank" rel="https://stackoverflow.com/">
          <img src={Twitter_Icon} alt="Stack Overflow" className="social-icon" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="https://stackoverflow.com/">
          <img src={Instagram_Icon} alt="Stack Overflow" className="social-icon" />
        </a>
      </div>
    </div>
  );
};
