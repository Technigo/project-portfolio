import { Headline } from "../components/Headline";
import { SkillSets } from "../components/SkillSetComponent/SkillSets";




export const SkillSetPage = () => {
    let headerText = "Skills";


    return (
        <div>
            <Headline headerText={headerText} />
            <div className="skills-container-wrapper">
                <SkillSets />
            </div>
        </div>
    )
}
