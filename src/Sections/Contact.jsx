import { BigHeadlines } from "../Components/BigHeadlines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

export const Contact = () => {
    const sectionId = 6;

    return (
        <div className="contact-info-wrapper">
            <BigHeadlines sectionId={sectionId} />
            <img className="profile-pic" src="/images/profle-pic.jpg" alt="profile picture" />
            <div className="contact-info">
                <p>Hang Nguyen<br />+46 720 319534<br />nguyenvuhang@gmail.com</p>
            </div>
            <div className="social-media">
                <ul className="socials">
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/hang-nguyen-07a734b0"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#d0d0d0",}} />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/Hang-Nguyen-Vu"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faGithub} style={{color: "#d0d0d0",}} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faStackOverflow} style={{color: "#d0d0d0",}} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} style={{color: "#d0d0d0",}} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#d0d0d0",}} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
