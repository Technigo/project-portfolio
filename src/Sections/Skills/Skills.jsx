import "./skills.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { SkillsList } from "./SkillsList";

// Component for the featured skills section. The structure of the section is set up. 
export const Skills = () => {
    return (
        <section className="skills">
            <div className="skills-section-no-background"></div>
            <MainHeading className={"skills-heading"} text={"Skills"} />
            <div className="skill-cards-section">
                <SkillsList />
            </div>
        </section>
    )
}
