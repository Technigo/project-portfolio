import "./ContactSection.css";
import Linda from "/FotoLinda.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Banner } from "./Banner";

export const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <h1 className="contact-title">Let&apos;s talk</h1>
        <img src={Linda} alt="Picture of Linda Frischknecht, Web Developer." />
        <div className="contact">
          <p>Linda Frischknecht</p>
          <p>+41 (0)76 329 67 97</p>
          <p>linda.frischknecht@gmail.com</p>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/lindafrischknecht/"
            target="_blank"
            aria-label="Click here to get to my linkedIn."
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/linda-f"
            target="_blank"
            aria-label="Click here to get to my GitHub."
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <Banner />
    </div>
  );
};
