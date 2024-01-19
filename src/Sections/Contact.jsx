import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";
import linkedinIcon from "/src/assets/Btn-linkedin.svg";
import githubIcon from "/src/assets/Btn-github.svg";
import instagramIcon from "/src/assets/Btn-instagram.svg";
import TickerTape from "../Components/TickerTape";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Headlines title="Let's talk" />
      <Profile />
      <ul>
        <li>Janice Cheng</li>
        <li>+46(0)763 12 33 45</li>
        <li>jjanice.cheng@gmail.com</li>
      </ul>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/janice-cheng-4ab007113/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedinIcon" />
        </a>
        <a
          href="https://github.com/jforjanice"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="githubIcon" />
        </a>
        <img src={instagramIcon} alt="linkedinIcon" />
      </div>
      <TickerTape />
    </div>
  );
};

export default Contact;
