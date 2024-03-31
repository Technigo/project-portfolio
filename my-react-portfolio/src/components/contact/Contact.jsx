import { ProfileImage } from "../profileImage/ProfileImage";
import "./Contact.css";
import { Heading } from "../heading/Heading";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="heading-wrapper">
          <Heading level="2" text="Let's talk" className="dark" />
        </div>
        <div className="profile-wrapper">
          <ProfileImage />
        </div>
        <div className="flex contact-wrapper">
          <Heading level="3" text="Eliane Weber" />
          <Heading level="3" text="eliane.weber(at)yahoo.com" />
        </div>
        <div className="social-wrapper">
          <a
            href="https://www.linkedin.com/in/eliane-b-weber/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../linkedin.svg" alt="linkedin-icon" />
          </a>
          <a
            href="https://www.instagram.com/itselianeweber/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../instagram.svg" alt="instagram-icon" />
          </a>
          <a href="https://github.com/El1an3/" target="_blank" rel="noreferrer">
            <img src="../btngithub.svg" alt="github-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
