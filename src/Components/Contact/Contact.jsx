import { MainHeading } from "../MainHeading/MainHeading";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section">
      <MainHeading className={"heading-text lets-talk"} text={"Let's Talk"} />

      <div className="contact-wrapper">
        <img
          className="profile-pic"
          src="/assets/IMG_9270.jpeg"
          alt="Profile picture of Inna"
        />

        <div className="contact-text">
          <p className="talk-text name">Inna Kokic</p>

          <a className="phone-number" href="tel:+46700627955">
            +46(0)700-627 955
          </a>

          <a className="email" href="mailto:innkokic1@gmail.com">
            Innakokic1@gmail.com
          </a>
        </div>

        <div className="social-icon-wrapper">
          <a
            className="icon-link github-link"
            href="https://github.com/InnaKokic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/githubGrey.svg" alt="github icon" />
          </a>
          <a
            className="icon-link linkedin-link"
            href="https://www.linkedin.com/in/inna-kokic-a579b928a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/linkedinGrey.svg" alt="github icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
