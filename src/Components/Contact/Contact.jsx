import { MainHeading } from "../MainHeading/MainHeading";
import "./Contact.css";
export const Contact = () => {
  return (
    <section className="contact-section">
      <MainHeading className={"heading-text lets-talk"} text={"Let's Talk"} />
      <div className="contact-wrapper">
        <img
          className="profile-pic"
          src="/assets/example2.png"
          alt="Profile picture of Inna"
        />

        <div className="contact-text">
          <div>
            <p>Inna Kokic</p>
          </div>
          <div className="phone-number">
            <a href="tel:+46700627955">+46(0)700-627 955</a>
          </div>
          <div>
            <a href="mailto:innkokic1@gmail.com">Innakokic1@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};
