import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LetsTalk.css";

export const LetsTalk = () => {
  return (
    <section className="lets-talk">
      <div className="lets-talk-box">
        <h1>Let’s talk</h1>
        <div className="lets-talk-wrapper">
          <img></img>
          <div className="contact-info">
            <h2>Frida Svensson</h2>
            <h2>+46(0)733 14 68 49</h2>
            <h2>fridamarisvensson@gmail.com</h2>
          </div>
        </div>
        <div className="social-buttons-wrapper">
          <a href="https://www.linkedin.com/in/frida-svensson-649019295/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </a>
          <a href="https://github.com/FridaMari">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="https://stackoverflow.com/users/23893973/frida-svensson">
            <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
          </a>
        </div>
      </div>
    </section>
  );
};
