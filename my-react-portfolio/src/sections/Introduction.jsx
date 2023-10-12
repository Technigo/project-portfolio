
import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { SubHeading } from "./components/Typo/SubHeading.jsx";
import { BodyText } from "./components/Typo/BodyText.jsx"


export const Introduction = () => {

    const BodyContent = `Sara is an exceptional developer known for her innovative solutions and 
    exceptional coding abilities. She creates user-friendly applications and 
    solves complex issues with ease. Her drive for excellence makes her a 
    valuable asset to any project and a standout in the technology field.`


    return (
        <section className="introduction-section">
            <div className="image-wrapper">
                <div className="image-cropper">
                <img src="src/assets/profile-pic.jpg" alt="A picture of Vera Witting" />
                </div>
            </div>
            <div className="headings-introduction">
            <SubHeading text={`Hello, I'm Vera Witting`}/>
            <MainHeading className={`dark-h2-introduction`} text={`Frontend Developer`}/>
            </div>
            <BodyText text={BodyContent} />
            <img className="arrow" src="src/assets/elements/arrow.svg" alt="arrow" />
        </section>
    )
}