import { CircleImage } from "../../reusableComponents/images/CircleImage"
import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import BtnGithub from "/icons/BtnGithub.png"
import BtnLinkedin from "/icons/BtnLinkedin.png"

import "./Footer.css"

export const Footer = () => {
    const footerTitle = "Let's talk"

    return (
        <div>
            <SectionTitle sectionTitletext={footerTitle} />
            <CircleImage />
            <h2>
                <ul>
                    <li>Sheryll Poo-Cheong</li>
                    <li> +55(0)55 555 5555</li>
                    <li>sheryll@mail.com</li>
                </ul>
            </h2>
            <img src={BtnGithub} alt="" />
            <img src={BtnLinkedin} alt="" />
            <nav>
                <p>Sheryll Poo-Cheong . Front-end Developer . </p>
            </nav>
        </div>
    )
}
