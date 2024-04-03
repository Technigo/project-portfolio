import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Let&apos;s talk</h1>
        </div>
        <div className="contact-content">
          <img src="src/assets/profilepic.jpg" alt="Profile Picture" />
          <p>Cornelia Dahlin</p>
          <p>+46(0)766422217</p>
          <p>cornelia.dahlin@proton.me</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faStackOverflow} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="marquee-section">
          <div className="marquee-div">
            <div className="marquee">
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull; Cornelia Dahlin &bull; Frontend
              Developer &bull; Cornelia Dahlin &bull; Frontend Developer &bull;
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull; Cornelia Dahlin &bull; Frontend
              Developer &bull; Cornelia Dahlin &bull; Frontend Developer &bull;
              Cornelia Dahlin &bull; Frontend Developer &bull; Cornelia Dahlin
              &bull; Frontend Developer &bull;
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
