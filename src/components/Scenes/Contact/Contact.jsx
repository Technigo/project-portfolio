import "./Contact.css";
import { ProfileImage } from "../../ProfileImage/ProfileImage";
import { LiaLinkedinIn } from "react-icons/lia";
import { AiFillGithub } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export const Contact = () => {
  return (
    <section id="contact" aria-label="Contact Information">
      <div className="page-wrapper">
        <h2 className="page-title">Let's talk</h2>
        <ProfileImage />
        <ul className="contact-info">
          <li>Julia Holm</li>
          <li>+46(0)768 23 17 17</li>
          <li>
            <a href="mailto:juliat.holm@gmail.com">juliat.holm@gmail.com</a>
          </li>
        </ul>
        <div className="social-icons">
          <LiaLinkedinIn className="footer-icon" aria-label="LinkedIn" />
          <AiFillGithub className="footer-icon" aria-label="GitHub" />
          <FaStackOverflow
            className="footer-icon"
            aria-label="Stack Overflow"
          />
          <AiOutlineInstagram className="footer-icon" aria-label="Instagram" />
        </div>
      </div>
    </section>
  );
};
