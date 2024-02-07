import "./tech.css";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";

const techText = "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair programming, Github."

export const Tech = () => {
    return (
        <section className="tech">
            <section className="tech-wrapper">
                <LargeText className="tech-heading" text={"Tech"} />
                <NormalText className="tech-paragraph" text={techText} />
            </section>
        </section>
    )

}