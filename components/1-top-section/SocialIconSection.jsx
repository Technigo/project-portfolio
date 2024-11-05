// SocialIconSection.jsx
import './TopSection.css'
import linkedinIcon from '../../src/assets/icons/Btn-linkedin.svg'
import githubIcon from '../../src/assets/icons/Btn-github.svg'
import stackoverflowIcon from '../../src/assets/icons/Btn-stackoverflow.svg'
import instagramIcon from '../../src/assets/icons/Btn-instagram.svg'

export const SocialIconSection = ({ className }) => {
  return (
    <div className={`social-icons ${className || ''}`}>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="social-icon" />
      </a>
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
        <img src={stackoverflowIcon} alt="Stack Overflow" className="social-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
      </a>
    </div>
  );
};