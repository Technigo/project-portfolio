import "./skills.css";
import { MainHeading } from "../../ReusableComponents/Typography/MainHeading";
import { SkillsList } from "./SkillsList";

export const Skills = () => {
    return (
        <section className="skills">
            <MainHeading className={"skills-heading"} text={"Skills"} />
            <div className="skill-cards-section">
                <SkillsList />
            </div>
        </section>
    )
}
