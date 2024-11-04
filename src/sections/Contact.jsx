import { Heading } from "../ui/Heading";
import linkedInIcon from '../assets/Linkedin-icon.svg'; // Adjust paths as necessary
import githubIcon from '../assets/Github_Icon.svg';
// import stackOverflowIcon from '../assets/stackoverflow-icon.svg';
import yourPhoto from '../assets/your-photo.jpg'; // Adjust the path to your photo
import './Contact.css'; // Make sure to create this CSS file for styling

export const Contact = () => {
  return (
    <div className="contact-section">
      <Heading heading="Let´s talk" level={2} className="contact-heading" />
      <div className="profile">
        <img src={yourPhoto} alt="Anna Hansen" className="profile-image" />
        <div className="contact-info">
          <p className="contact-name">Anna Hansen</p>
          <p className="phone">+46 (0) 73 39 92 75</p>
          <p className="email">anna@gmail.com</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        {/* <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={stackOverflowIcon} alt="Stack Overflow" className="social-icon" />
        </a> */}
      </div>
    </div>
  );
};
