import "./letstalk.css";
import profilePic from "../../assets/Bild.jpg";
import git from "../../assets/githubsocial.svg";
import linkedIn from "../../assets/linkedin.svg";

export const LetsTalk = () => {
  return (
    <div className="letstalk-container">
      <div className="lets-talk">
        <h3 className="lets-talk-title">Let's talk</h3>
        <img
          src={profilePic}
          alt="profile-picture"
          className="profile-picture"
        />

        <div className="contact-info">
          <p className="contact-name">Andrej Kavržić</p>
          <a href="tel:+46737332619" className="phone-number">
            +46(0)737332619
          </a>
          <a href="mailto:andrej.Kavržić@gmail.com">andrej.Kavržić@gmail.com</a>
        </div>
        <div className="social-bar">
          <button className="gitIconBtn" href="" rel="noreferrer">
            <img src={git} alt="github-image" />
          </button>
          <button className="linkedInBtn" href="" rel="noreferrer">
            <img src={linkedIn} alt="linkedIn-image" />
          </button>
        </div>
      </div>
    </div>
  );
};
