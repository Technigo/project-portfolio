import { ProfileImage } from "../profileImage/ProfileImage";
import "./Contact.css";
import { Heading } from "../heading/Heading";

export const Contact = () => {
  return (
    <section className="flex contact-section">
      <div className="flex contact-container">
        <Heading level="2" text="Let's talk" className="blue" />

        <ProfileImage />
        <div className="flex contact-wrapper">
          <Heading level="3" text="Eliane Weber" />
          <Heading level="3" text="+41 99 111 22 33" />
          <Heading level="3" text="example@example.com" />
        </div>
        <div className="social-wrapper">
          <button>
            <img src="../linkedin.svg" alt="linkedin-icon" />
          </button>
          <button>
            <img src="../instagram.svg" alt="instagram-icon" />
          </button>
          <button>
            <img src="../btngithub.svg" alt="github-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
