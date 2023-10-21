import "./tech.css";
import { MainHeading } from "../../ReusableComp/Typo/MainHeading";
import { LargeText } from "../../ReusableComp/Typo/LargeText";

export const Tech = () => {

    const techText = "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."

    return (
        <section className="tech">
            <div className="tech-text-section">
                <MainHeading className={"tech-heading"} text={"Tech"} />
                <LargeText text={techText} />
            </div>
        </section>
    )
}