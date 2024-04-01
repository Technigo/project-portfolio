import { Image } from "../../components/ImageElements/Image";
import linkedinSocialSvg from "/icons/linkedin-social.svg";
import githubSocialSvg from "/icons/github-social.svg";
import { TickerTape } from "../../components/TickerTape/TickerTape";
import "./Contact.css";

export const Contact = ({ avatarUrl, project }) => {
  return (
    <section className="contact-container">
      <h2>Let&apos;s talk</h2>
      <Image
        divClassName={"profile-image"}
        elementClassName={"circle-image"}
        imagePath={avatarUrl}
        imageAltText={"Profile-picture of Erica"}
      />
      <div className="contact-info">
        <h3>Erica Mechler</h3>
        <a aria-label="Phone number" href="tel:+708740282">
          <h3>+46(0)708 74 02 82</h3>
        </a>
        <a aria-label="E-mail adress" href="mailto:erica.mechler1@gmail.com">
          <h3>erica.mechler1@gmail.com</h3>
        </a>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/erica-mechler-a39b73a8/">
          <Image
            divClassName={"icon-box"}
            elementClassName={"icon"}
            imagePath={linkedinSocialSvg}
            imageAltText={"Link to Linkedin"}
          />
        </a>
        <a href="https://github.com/ericamechler">
          <Image
            divClassName={"icon-box"}
            elementClassName={"icon"}
            imagePath={githubSocialSvg}
            imageAltText={"Link to Github"}
          />
        </a>
      </div>
      <TickerTape />
    </section>
  );
};
