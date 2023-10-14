import { Headline } from "../components/Headline";
import { SkillSets } from "../components/SkillSetComponent/SkillSets";




export const SkillSetPage = () => {
    let headerText = "Skills";


    return (
        <div>
            <Headline className="big-heading" headerText={headerText} />
            <div className="skills-container-wrapper">
                <SkillSets />
            </div>
        </div>
    )
}
