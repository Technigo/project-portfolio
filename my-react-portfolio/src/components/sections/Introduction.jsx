import { Heading } from '../reusables/Heading.jsx'
import { ProfileImage } from '../reusables/ProfileImage.jsx'
import { SubHeading } from '../reusables/SubHeading.jsx'
import './Introduction.css'
import { Paragraph } from '../reusables/Paragraph.jsx'

export const Introduction = () => {
    return (
        <header>
            <section className="main-container">
            <section className="heading-container">
                <SubHeading 
                    subHeading="Hi, I'm Olga Lepistö"
                    className="intro-sub" />
                <Heading
                    heading="Frontend Developer"
                    className="intro-heading" />
            </section>
            <section className="intro-info">
                <ProfileImage
                    className="intro-img" />
                <div className="intro-info">
                    <Paragraph
                        text="Olga is a web development student at Technigo's boot camp in autumn 2023.
                        She especially loves working with CSS and React."
                        className="about-me" />
                </div>
            </section>
            </section>
        </header>
    )
}