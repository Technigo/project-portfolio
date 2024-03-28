import { Image } from "../../components/ImageElements/Image";
import linkedinSvg from "../../assets/icons/Btn - linkedin.svg";
import githubSvg from "../../assets/icons/Btn - github.svg";
import { TickerTape } from "../../components/TickerTape/TickerTape";
import "./Contact.css";

export const Contact = ({ avatarUrl }) => {
  return (
    <section className="contact-container">
      <h2>Let&apos;s talk</h2>
      <div className="profile-image">
        <img src={avatarUrl} alt="profile-image" className="circle-image" />
      </div>
      <div className="contact-info">
        <h3>Erica Mechler</h3>
        <a aria-label="Phone number" href="tel:+708740282">
          <h3>+46(0)708 74 02 82</h3>
        </a>
        <a aria-label="E-mail adress" href="mailto:erica.mechler1@gmail.com">
          <h3>erica.mechler1@gmail.com</h3>
        </a>
      </div>
    </section>
  );
};
