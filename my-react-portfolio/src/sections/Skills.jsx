import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { SubHeading } from "./components/Typo/SubHeading.jsx";
import { SkillsList } from "./components/SkillsList.jsx";


export const Skills = () => {

    return(
        <section className="skills-section">
            <MainHeading className={`dark-h2`} text={`Skills`}/>
            <SubHeading className={`sub-heading-skills`} text={`Code`} />
            <SkillsList />
            <SubHeading className={`sub-heading-skills`} text={`Toolbox`} />
            <SkillsList />
            <SubHeading className={`sub-heading-skills`} text={`Upcoming`} />
            <SkillsList />
            <SubHeading className={`sub-heading-skills`} text={`More`} />

        </section>
    )
}