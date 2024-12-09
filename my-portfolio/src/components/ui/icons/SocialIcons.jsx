/* ========== SOCIAL ICONS ========== */

import GithubIcon from "../../../assets/icons/Btn - github.svg";
import InstagramIcon from "../../../assets/icons/Btn - instagram.svg";
import LinkedinIcon from "../../../assets/icons/Btn - linkedin.svg";
import StackOverflowIcon from "../../../assets/icons/Btn - stackoverflow.svg";
import TwitterIcon from "../../../assets/icons/Btn - twitter.svg";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt="GitHub" className="icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" className="icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={LinkedinIcon} alt="LinkedIn" className="icon" />
      </a>
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <img src={StackOverflowIcon} alt="Stack Overflow" className="icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={TwitterIcon} alt="Twitter" className="icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
