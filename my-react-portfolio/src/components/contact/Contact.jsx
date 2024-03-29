import { ProfileImage } from "../profileImage/ProfileImage";
import "./Contact.css";
import { Heading } from "../heading/Heading";

export const Contact = () => {
  return (
    <div>
      <section className="flex contact-section">
        <div className="flex contact-container">
          <Heading level="1" text="Let's talk" className="blue" />
          <ProfileImage />
          <div className="flex contact-wrapper">
            <Heading level="4" text="Eliane Weber" />
            <Heading level="4" text="+41 99 111 22 33" />
            <Heading level="4" text="example@example.com" />
          </div>
          <div className="social-wrapper">
            <button>
              <img src="../linkedin.svg" alt="linkedin-icon" />
            </button>
            <button>
              <img src="../instagram.svg" alt="instagram-icon" />
            </button>
            <button>
              <img src="../github.svg" alt="github-icon" />
            </button>
          </div>
        </div>
      </section>
      <footer className="flex footer">
        <Heading
          level="4"
          text=" Eliane Weber • Project Manager • Eliane Weber • Project Manager •
          Eliane Weber • Project Manager"
          className="white"
        />
      </footer>
    </div>
  );
};
