import './Contact.css';
import Headshot from '../../../public/Headshot.jpeg';
import linkedInIcon from '../../../public/Icons/LinkedinIcon.svg';
import githubIcon from '../../../public/Icons/GithubIcon.svg';



export const Contact = () => {
  return (
    <div className="contact-wrapper">
            <h1>Let's Talk</h1>
            <div className='contact-content'>
            <img src={Headshot} alt="Profile" className="profile-image" />
            <div className='contact-text'>
            <p>Isaac Kamran</p>
            <p>+46(0)76 938 0884</p>
            <p>isackamran@hotmail.com</p>
            </div>
            <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/isaac-kamran/" target="_blank" rel="noreferrer">
                    <img src={linkedInIcon} alt="LinkedIn link" />
                </a>
                <a href="https://github.com/Isaackamran" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github link" />
                </a>
                </div>
            </div>
        </div>
    );
};
