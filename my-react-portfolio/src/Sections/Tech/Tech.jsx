import "./tech.css";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";

const techText = "HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair programming, Github."

export const Tech = () => {
    return (
        <section className="tech">
            <MainTitle className={"heading"} text={"Tech"} />
            <LargeText text={techText} />
        </section>
    )

}