import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { SkillsList } from "./SkillsList";
import "./skills.css";



export const Skills = () => {
    return (
        <section className="skills">
            <MainTitle className={"heading"} text={"Skills"} />

            <div className="skill-section">
                <SkillsList />
            </div>


        </section>
    )

}