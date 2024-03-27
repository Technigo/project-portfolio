import "./ContactSection.css";
import Linda from "../assets/FotoLinda.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Let&apos;s talk</h1>
      <img
        src={Linda}
        alt="Picture of Linda Frischknecht, Frontend Developer."
      />
      <div className="contact">
        <p>Linda Frischknecht</p>
        <p>+41 (0)76 329 67 97</p>
        <p>linda.frischknecht@gmail.com</p>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/lindafrischknecht/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/linda-f" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
