import { Heading } from "../reusables/Heading"
import './Tech.css'

export const Tech = () => {
    return (
        <article className="tech">
            <section className="tech-wrapper">
            <div className="tech-heading">
        <Heading
            heading="Tech"
            className="tech" />
            </div>
            <div className="tech-skills">
                <h3>HTML, CSS, JavaScript, ReactJS, GitHub, mob programming, APIs, Web Accessibility.</h3>
            </div>
            </section>
        </article>
    )
}