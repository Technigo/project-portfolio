import "./tech.css";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";

const techText = "HTML"

export const Tech = () => {
    return (
        <section className="tech">
            <MainTitle className={"heading"} text={"Tech"} />
            <LargeText text={techText} />

        </section>
    )

}