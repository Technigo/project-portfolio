import { Heading } from "../reusables/Heading"
import './Tech.css'
import { Paragraph } from "../reusables/Paragraph"

export const Tech = () => {
    return (
            <div className="tech-container">
            <div className="tech-text-wrapper">
                <div className="tech-heading">
                    <Heading
                        heading="Tech"
                        className="tech-heading-2" />
                </div>
                <div className="tech-skills">
                    <Paragraph
                        text="HTML, CSS, JavaScript, ReactJS, GitHub, mob programming, APIs, Web Accessibility, Express.js, MongoDB."
                        className="tech-text" />
                </div>
            </div>
            </div>
    )
}