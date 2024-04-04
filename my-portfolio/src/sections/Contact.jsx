import { Headline } from "../components/Headline.jsx";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-content-container">
        <Headline style="contact-title" title="Let's talk" />
        <div className="contact-desktop-box">
          <img className="profile-img" src="profileImg.jpg" alt="profile image of Maja" />
          <div className="contact-text-box">
            <p>Maja Schouenke</p>
            <p>+46(0)706 42 10 45</p>
            <p>m.schouenke@gmail.com</p>
          </div>

          <div className="platform-icons-container">
            <a href="https://github.com/schouenkes" target="_blank" rel="noreferrer noopener">
              <img src="icons/github-tag.svg" alt="GitHub icon" />
            </a>
            <a href="www.linkedin.com/in/maja-schouenke-0a09842a7" target="_blank" rel="noreferrer noopener">
              <img src="icons/linkedIn-icon.svg" alt="LinkedIn icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
