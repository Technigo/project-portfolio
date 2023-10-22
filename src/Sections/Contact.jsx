import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";
import linkedinIcon from "/src/assets/Btn-linkedin.svg";
import githubIcon from "/src/assets/Btn-github.svg";
import stackoverflowIcon from "/src/assets/Btn-stackoverflow.svg";
import instagramIcon from "/src/assets/Btn-instagram.svg";

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
        <img src={linkedinIcon} />
        <img src={githubIcon} />
        <img src={stackoverflowIcon} />
        <img src={instagramIcon} />
      </div>
    </div>
  );
};

export default Contact;
