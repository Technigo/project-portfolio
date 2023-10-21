import "./skills.css";
import { MainHeading } from "../../ReusableComp/Typo/MainHeading";
import { SkillsList } from "./SkillsList";

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