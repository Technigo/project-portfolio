import "./tech.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading.jsx";
import { LargeText } from "../../ReusableComponents/Typography/LargeText.jsx";

// Component for the "Tech"-section
export const Tech = () => {
    const techText = "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."
    return (
        <section className="tech">
            <MainHeading className={"tech-heading"} text={"Tech"} />
            <LargeText text={techText} />
        </section>
    )
}
