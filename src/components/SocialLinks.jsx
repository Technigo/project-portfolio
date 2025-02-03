import githubIcon from "../assets/Btn - github.svg"
import instaIcon from "../assets/Btn - instagram.svg"
import linkedinIcon from "../assets/Btn - linkedin.svg"
import stackoverflowIcon from "../assets/Btn - stackoverflow.svg"
import twitterIcon from "../assets/Btn - twitter.svg"
import "./css/SocialLinks.css"


const SocialLinks = () => {
    return (
        <div className="social-links-header">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Ikon Linkedin" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Ikon Github" />
            </a>
            <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                <img src={stackoverflowIcon} alt="Ikon Srack overflow" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Ikon Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Ikon instagram"/>
            </a>
        </div>
    );
};

export default SocialLinks;