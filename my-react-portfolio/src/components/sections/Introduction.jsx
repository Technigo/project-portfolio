import { Heading } from '../reusables/Heading.jsx'
import { ProfileImage } from '../reusables/ProfileImage.jsx'
import { SubHeading } from '../reusables/SubHeading.jsx'
import arrow from '../../assets/arrow.svg'
import './Introduction.css'

export const Introduction = () => {
    return (
        <div className="header-container">
            <div className="heading-container">
                <SubHeading
                    subHeading="Hi, I'm Olga Lepistö"
                    className="intro-sub" />
                <Heading
                    heading="Frontend Developer"
                    className="intro-heading" />
            </div>
            <div className="intro-info">
                <ProfileImage
                    className="intro-img" />
                <div className="intro-text">
                    <p>
                        Olga is a web development student at Technigo's boot camp in autumn 2023.
                        She especially loves working with CSS and React.
                    </p>
                </div>
            </div>
            <div className="arrow-container">
                <img src={arrow} alt="arrow icon" className="arrow" />
            </div>
        </div>
    )
}

export default Introduction