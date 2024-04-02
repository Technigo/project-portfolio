import linkedinSocialSvg from "/icons/linkedin-social.svg";
import githubSocialSvg from "/icons/github-social.svg";
import "./Contact.css";
import PropTypes from "prop-types";
import { ImageComponent } from "../../components/ImageComponents/ImageComponent";

export const Contact = ({ avatarUrl }) => {
  return (
    <section className="contact-container">
      <h2>Let&apos;s talk</h2>
      <ImageComponent
        divClassName={"profile-image"}
        elementClassName={"circle-image"}
        imagePath={avatarUrl}
        imageAltText={"Profile-picture of Erica"}
      />
      <div className="contact-info">
        <h3>Erica Mechler</h3>
        <a
          aria-label="Phone number"
          href="tel:+708740282"
          rel=" noopener noreferrer"
        >
          <h3>+46(0)708 74 02 82</h3>
        </a>
        <a
          aria-label="E-mail adress"
          href="mailto:erica.mechler1@gmail.com"
          rel=" noopener noreferrer"
        >
          <h3>erica.mechler1@gmail.com</h3>
        </a>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/erica-mechler-a39b73a8/"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <ImageComponent
            divClassName={"icon-box"}
            elementClassName={"icon"}
            imagePath={linkedinSocialSvg}
            imageAltText={"Link to Linkedin"}
          />
        </a>
        <a
          href="https://github.com/ericamechler"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <ImageComponent
            divClassName={"icon-box"}
            elementClassName={"icon"}
            imagePath={githubSocialSvg}
            imageAltText={"Link to Github"}
          />
        </a>
      </div>
    </section>
  );
};

// Prop type validation
Contact.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};
