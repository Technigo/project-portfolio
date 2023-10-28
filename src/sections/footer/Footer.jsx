import { CircleImage } from "../../reusableComponents/images/CircleImage"
import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import { MediumsizedTitle } from "../../reusableComponents/texts/MediumsizedTitle"
import BtnGithub from "/icons/BtnGithub.png"
import BtnGithubHover from "/icons/BtnGithubHover.png"
import BtnLinkedin from "/icons/BtnLinkedin.png"
import BtnLinkedinHover from "/icons/BtnLinkedinHover.png"

import "./Footer.css"


export const Footer = () => {
    const footerTitle = "Let's talk"
    const myContactInfo = ["Sheryll Poo-Cheong", "+55(0)55 555 5555", "sheryll@mail.com"]

    return (
        <div className="contact-info">
            <SectionTitle sectionTitletext={footerTitle} />
            <CircleImage />
            <div className="contact-info-list">
                <ul>
                    {myContactInfo.map((info) => (
                        <li key={info}>
                            <MediumsizedTitle mediumHeader={info} />
                        </li>
                    ))}
                </ul>
            </div>

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
                    </button>
                </a>
                <a
                    href='#'
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to Linkedin profile"
                >
                    <button type="button" aria-label="go to Linkedin profile">
                        <img className="btn-linkedin" src={BtnLinkedin} alt="linkedin image" />
                        <img className="btn-linkedin-hover" src={BtnLinkedinHover} alt="linkedin image hovered" />
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
