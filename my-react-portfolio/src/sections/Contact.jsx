import myImage from "../../public/myImage.jpg";
import githubIcon from "../../public/githubIcon.png";
import linkedinIcon from "../../public/linkedinIcon.png";
import "../styling/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h1 className="contact">Let&apos;s talk</h1>
      <img src={myImage} alt="My picture" className="myImage" />
      <div className="contactInfo">
        <h2>Paula Jungåker</h2>
        <h2>+46(0)76 170 11 32</h2>
        <h2>paula010514@hotmail.com</h2>
        <div className="contactIcons">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
