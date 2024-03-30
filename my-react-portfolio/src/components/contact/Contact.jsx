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
          <Heading level="3" text="+41 99 111 22 33" />
          <Heading level="3" text="example@example.com" />
        </div>
        <div className="social-wrapper">
          <button className="social-btn">
            <img src="../linkedin.svg" alt="linkedin-icon" />
          </button>
          <button className="social-btn">
            <img src="../instagram.svg" alt="instagram-icon" />
          </button>
          <button className="social-btn">
            <img src="../btngithub.svg" alt="github-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
