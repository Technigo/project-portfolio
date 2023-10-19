import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import { MediumsizedTitle } from "../../reusableComponents/texts/MediumsizedTitle"
import './Tech.css'

export const Tech = ({ sectionTitletext, mediumHeader }) => {

    const lhstext = 'Tech'
    const rhstext = 'HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub'
    return (
        <section className="tech">
            <SectionTitle sectionTitletext={lhstext} />
            <MediumsizedTitle mediumHeader={rhstext} />
        </section>
    )
}
