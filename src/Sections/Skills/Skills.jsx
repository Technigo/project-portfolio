import { skills } from "../../../skills.json"
import { SkillSet } from "../../Components/SkillSet/SkillSet"
import "./Skills.css"

export const Skills = () => {
    const { code, toolbox, upcoming, more } = skills[0]
    return (
        <>
        <div className="grid-parent dark">
            <div className="section skills">
                <h1>Skills</h1>
                <div className="skillset-container">
                    <SkillSet type="code" typeArray={code} />
                    <SkillSet type="toolbox" typeArray={toolbox} />
                    <SkillSet type="upcoming" typeArray={upcoming} />
                    <SkillSet type="more" typeArray={more} />
                </div>
            </div>
        </div>
        </>
    )
    
}