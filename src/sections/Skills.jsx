import { MainHeading } from "./components/Typo/MainHeading.jsx";
import { SubHeading } from "./components/Typo/SubHeading.jsx";
import { SkillsList } from "./components/SkillsList.jsx";


export const Skills = () => {

    const CodeList = ["HTML5", "CSS3", "JavaScript ES6", "React", "Styled Components", "GitHub"]
    const ToolboxList = ["Atom", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Adobe After Effects", "Figma", "Slack", "Blender"]
    const UpcomingList = ["Node.js", "Motion Graphics"]
    const MoreList = ["Branding", "Typography", "Graphic Design", "Motion Graphics", "Agile Methodology"]





    return(
        <section className="skills-section">
            <div className="skills-wrapper">
                <MainHeading className={`dark-h2`} text={`Skills`}/>
                <SubHeading className={`sub-heading-skills`} text={`Code`} />
                <SkillsList list={CodeList} />
                <SubHeading className={`sub-heading-skills`} text={`Toolbox`} />
                <SkillsList list={ToolboxList}/>
                <SubHeading className={`sub-heading-skills`} text={`Upcoming`} />
                <SkillsList list={UpcomingList}/>
                <SubHeading className={`sub-heading-skills`} text={`More`} />
                <SkillsList list={MoreList}/>
            </div>
        </section>
    )
}