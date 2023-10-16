import "./Contact.css";
import { ProfileImage } from "../../ProfileImage/ProfileImage";
import { LiaLinkedinIn } from "react-icons/lia";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const Contact = () => {
  return (
    <section id="contact" aria-label="Contact Information">
      <div className="page-wrapper">
        <h2 className="page-title">Let's talk</h2>
        <ProfileImage />
        <div className="contact-info">
          <p>
            <span className="visually-hidden">Name:</span>
            <span className="contact-detail">Julia Holm</span>
          </p>
          <p>
            <span className="visually-hidden">Phone:</span>
            <span className="contact-detail">+46(0)768 23 17 17</span>
          </p>
          <p>
            <a href="mailto:juliat.holm@gmail.com">
              <span className="visually-hidden">Email:</span>
              <span className="contact-detail">juliat.holm@gmail.com</span>
            </a>
          </p>
        </div>
        <div className="social-icons" target="_blank" rel="noopener noreferrer">
          <a href="https://www.linkedin.com/in/julia-holm-63249226b/">
            <LiaLinkedinIn className="footer-icon" aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/JuliaHolm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="footer-icon" aria-label="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/liaholms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram
              className="footer-icon"
              aria-label="Instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
