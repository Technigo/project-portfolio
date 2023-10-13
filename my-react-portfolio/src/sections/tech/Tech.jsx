import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import { NormalText } from "../../reusableComponents/texts/NormalText"
import './Tech.css'

export const Tech = ({ sectionTitletext, text }) => {

    const lhstext = 'Tech'
    const rhstext = 'HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub'
    return (
        <div className="tech">
            <SectionTitle sectionTitletext={lhstext} />
            <NormalText text={rhstext} />
        </div>
    )
}
