import { Heading } from "../reusables/Heading"
import './Tech.css'

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
                    <p className="tech-text">
                        HTML, CSS, JavaScript, ReactJS, GitHub, mob programming, APIs, Web Accessibility, Express.js, MongoDB.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tech