import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { SubHeading } from "./components/Typo/SubHeading.jsx";
import { SocialMedia } from "./components/SocialMedia.jsx";

export const LetsTalk = () => {

    const contactInfoName = "Vera Witting"
    const contactInfoPhone = "+46(0) 705 13 35 32"
    const contactInfoMail = "verawitting@gmail.com"

    return (
        <section className="letstalk-section">
            <MainHeading className={`dark-h2`} text={`Let's Talk!`}/>
            <div className="image-cropper">
                <img src="src/assets/profile-pic.jpg" alt="A picture of Vera Witting" />
            </div>
            <div className="info-wrapper">
                <SubHeading text={contactInfoName}/>
                <SubHeading text={contactInfoPhone}/>
                <SubHeading text={contactInfoMail}/>
            </div>
            <SocialMedia />
        </section>
    )
}