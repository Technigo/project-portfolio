import { Heading } from "../reusables/Heading"
import './Tech.css'
import { Paragraph } from "../reusables/Paragraph"

export const Tech = () => {
    return (
        <article className="tech">
            <section className="main-container">
            <section className="tech-wrapper">
                <div className="tech-heading">
                    <Heading
                        heading="Tech"
                        className="tech-heading-2" />
                </div>
                <div className="tech-skills">
                    <Paragraph
                        text="HTML, CSS, JavaScript, ReactJS, GitHub, mob programming, APIs, Web Accessibility."
                        className="tech-text" />
                </div>
            </section>
            </section>
        </article>
    )
}