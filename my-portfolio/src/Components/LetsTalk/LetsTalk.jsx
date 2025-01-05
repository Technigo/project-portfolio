import "./LetsTalk.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/selfie.jpg"; // Picture importation


export const LetsTalk = () => {
    return (
        <div>
            <div className="contact-section">
                <h1 className="contact-title">Let's talk</h1>
                <img src={profileImage} alt="Picture of Sherry the developer" />
                <div className="contact">
                    <p>Sherry Isola-Gbenla</p>
                    <p>+46 76 242 06 19</p>
                    <p>Sherry.isolagbenla@hotmail.com</p>
                </div>
                <div className="icons">
                    <a
                        href="https://www.linkedin.com/in/sherry-isola-gbenla/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Click here to get to my LinkedIn."
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/Sherrydev11"
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