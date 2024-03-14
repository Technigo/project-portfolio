import "../components/headline.css"
import "./skillSetPage.css"
import { Headline } from "../components/Headline";
import { SkillSets } from "../components/SkillSetComponent/SkillSets";




export const SkillSetPage = () => {
    let headerText = "Skills";


    return (
        <section className="skillset-page-wrapper">
            <Headline className="big-heading" headerText={headerText} />
            <div className="skills-container-wrapper">
                <SkillSets />
            </div>
        </section>
    )
}
