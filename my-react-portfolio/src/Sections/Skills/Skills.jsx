import { LargeText } from "../../ReusableComponents/Texts/LargeText";
import { SkillsList } from "./SkillsList";
import "./skills.css";



export const Skills = () => {
    return (
        <section className="skills">
            <LargeText className="heading" text={"Skills"} />

            <div className="skill-section">
                <SkillsList />
            </div>


        </section>
    )

}