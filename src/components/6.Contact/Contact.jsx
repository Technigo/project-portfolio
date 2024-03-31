import "./Contact.css";
import profilePicture from "../../assets/profile-picture.png";

const linkedInIcon = "../../assets/linkedin.svg";
const githubIcon = "../../assets/github-contact.svg";
const stackOverflowIcon = "../../assets/stackoverflow.svg";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Let&apos;s talk</h2>
        <img
          src={profilePicture}
          alt="Profile picture"
          className="profile-pic"
        />
        <div className="contact-info">
          <p>Lovisa Åberg</p>
          <p>+46(0)768 69 74 74</p>
          <p>Lovisa.aaberg@gmail.com</p>
          <div className="icons-contact">
            <a href="https://www.linkedin.com/in/lovisaaberg/" target="_blank">
              <img
                src={linkedInIcon}
                alt="Link to LinkedIn"
                className="linkedIn"
              />
            </a>
            <a href="https://github.com/Lovisaaberg" target="_blank">
              <img src={githubIcon} alt="Link to Github" className="github" />
            </a>
            <a
              href="https://stackoverflowteams.com/c/technigo/users/622/"
              target="_blank"
            >
              <img
                src={stackOverflowIcon}
                alt="Link to Stackoverflow"
                className="stackoverflow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
