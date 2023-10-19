import { CircleImage } from "../../reusableComponents/images/CircleImage"
import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import BtnGithub from "/icons/BtnGithub.png"
import BtnGithubHover from "/icons/BtnGithubHover.png"
import BtnLinkedin from "/icons/BtnLinkedin.png"
import BtnLinkedinHover from "/icons/BtnLinkedinHover.png"

import "./Footer.css"

export const Footer = () => {
    const footerTitle = "Let's talk"

    return (
        <div className="contact-info">
            <SectionTitle sectionTitletext={footerTitle} />
            <CircleImage />
            <h2>
                <ul>
                    <li>Sheryll Poo-Cheong</li>
                    <li> +55(0)55 555 5555</li>
                    <li>sheryll@mail.com</li>
                </ul>
            </h2>
            <div className="footer-links">
                <a
                    href='https://github.com/Sheryll-Ann'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to github account"
                >
                    <button type="button" aria-label="go to github account">
                        <img className="btn-github" src={BtnGithub} alt="github image" />
                        <img className="btn-github-hover" src={BtnGithubHover} alt="github image hovered" />
                        <span></span>
                    </button>
                </a>
                <a
                    href='#'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to Linkedin"
                >
                    <button type="button" aria-label="go to Linkedin">
                        <img className="btn-linkedin" src={BtnLinkedin} alt="linkedin image" />
                        <img className="btn-linkedin-hover" src={BtnLinkedinHover} alt="linkedin image hovered" />
                        <span></span>
                    </button>
                </a>
            </div>
            <nav>
                <div className="scroll-text">
                    <p>Sheryll PC · Front-End Developer · </p>
                    <p>Sheryll PC · Front-End Developer · </p>
                    <p>Sheryll PC · Front-End Developer  </p>
                </div>
            </nav>
        </div>
    )
}
