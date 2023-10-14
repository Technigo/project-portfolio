import "./contact.css";
import profileImg from "/dude.png";
import { LiaLinkedinIn } from "react-icons/lia";
import {AiFillGithub} from "react-icons/ai"
import { FaStackOverflow } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="page-wrapper">
        <div className="page-container">
          <h2 className="page-title">Let's talk</h2>
          <div className="profile-image-container">
            <img src={profileImg} alt="profile image" />
          </div>
          <p className="contact-info titles">
            Julia Holm <br /> +46(0)768 23 17 17 <br /> juliat.holm@gmail.com
          </p>
          <div className="social-icons">
            <LiaLinkedinIn className="footer-icon" />
            <AiFillGithub className="footer-icon"/>
            <FaStackOverflow className="footer-icon" />
            <AiOutlineInstagram className="footer-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
