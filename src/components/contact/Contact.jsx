import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <h1 className="contact-title">Let's talk</h1>
        <img src="1692713315443.jpg" alt="Picture of Jonas Hellström, Web Developer." />
        <div className="contact">
          <p>Jonas Hellström</p>
          <p>+46 738 39 66 38</p>
          <p>Jonas.hellstrom89@gmail.com</p>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/jonas-hellstr%C3%B6m-199531a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click here to get to my LinkedIn."
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Jonash189"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click here to get to my GitHub."
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
