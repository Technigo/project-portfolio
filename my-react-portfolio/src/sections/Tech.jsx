
import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { BodyBold } from "./components/Typo/BodyBold.jsx";


export const Tech = () => {

    const TechText = `HTML, CSS, Flexbox, Javascript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessability, APIs, mob-programming, pair-programming, GitHub.`    

    return (
        <section className="tech-section">
            <MainHeading className={`light-h2`} text={`Tech`}/>
            <BodyBold className={`tech-p`} text={TechText}/>
        </section>
    )
}  