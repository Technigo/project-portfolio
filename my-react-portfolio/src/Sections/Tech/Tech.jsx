import "./tech.css";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle";

const techText = "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair programming, Github."

export const Tech = () => {
    return (
        <section className="tech">
            <section className="tech-wrapper">
                <LargeText text={"Tech"} />
                <SubTitle text={techText} />
            </section>
        </section>
    )

}