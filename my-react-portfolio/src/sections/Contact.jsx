import myImage from "../assets/myImage.jpg";
import githubIcon from "../assets/githubIcon.png";
import linkedinIcon from "../assets/linkedinIcon.png";
import "../styling/Contact.css";
import banner from "../assets/Banner.png";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <h1 className="contact">Let's talk</h1>
        <img src={myImage} alt="My picture" className="myImage" />
        <h2>Paula Jungåker</h2>
        <h2>+46(0)76 170 11 32</h2>
        <h2>paula010514@hotmail.com</h2>
      </div>
      <a
        href="https://github.com/Paulajungaker"
        className="githubIcon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="Link to my GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/paula-jungåker-380418299/"
        className="linkedinIcon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="Link to my linkedIn" />
      </a>
      <img src={banner} alt="Paula Jungåker, Frontend Developer" />
    </div>
  );
};

export default Contact;
