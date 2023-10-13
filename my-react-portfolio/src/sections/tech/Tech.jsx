import { SectionTitle } from "../../reusableComponents/texts/SectionTitle"
import { NormalText } from "../../reusableComponents/texts/NormalText"

export const Tech = ({ sectionTitletext, text }) => {

    const lhstext = 'Tech'
    const rhstext = 'HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub'
    return (
        <>
            <SectionTitle sectionTitletext={lhstext} />
            <NormalText text={rhstext} />
        </>
    )
}
