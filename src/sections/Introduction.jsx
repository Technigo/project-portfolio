import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { SubHeading } from "./components/Typo/SubHeading.jsx";
import { BodyText } from "./components/Typo/BodyText.jsx"

import profile from "../assets/extraaa/profile-pic.jpg";
import arrow from "../assets/elements/arrow.svg"

import "./Introduction.css"
import "./Arrow.css"

export const Introduction = () => {

    const BodyContent = `Vera is an exceptional developer known for her innovative solutions and 
    exceptional coding abilities. She creates user-friendly applications and 
    solves complex issues with ease. Her drive for excellence makes her a 
    valuable asset to any project and a standout in the technology field.`


    return (
        <section className="introduction-section">
            <div className="introduction-wrapper">
                <div className="image-wrapper">
                    <div className="image-cropper">
                        <img src={profile} alt="A picture of Vera Witting" />
                    </div>
                </div>
                <div className="headings-introduction">
                <SubHeading className={`dark-h3-introduction`} text={`Hello, I'm Vera Witting`}/>
                <MainHeading className={`dark-h2-introduction`} text={`Frontend Developer`}/>
                </div>
                <BodyText text={BodyContent} />
            </div>
            <div className="arrow">
                <img className="arrow" src="arrow" alt="Arrow jumping, pointing down to the rest of the page" />
            </div>
        </section>
    )
}