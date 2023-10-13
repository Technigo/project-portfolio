import "./skills.css";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";

const skillsText = "Photoshop"

export const Skills = () => {
    return (
        <section className="skills">
            <MainTitle className={"heading"} text={"Skills"} />
            <LargeText text={skillsText} />

        </section>
    )

}