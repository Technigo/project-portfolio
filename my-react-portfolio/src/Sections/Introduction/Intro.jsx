import "./intro.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SubTitle } from "../../ReusableComponents/Texts/SubTitle"

const introText = "Evelyn is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."

export const Intro = () => {
    return (
        <header>
            <section className="profile-image">
                <CircleImage />
            </section>
            <section className="headings">
                <SubTitle text={"Hi! I am Evelyn Del Carmen"} />
                <MainTitle text={"Frontend Developer"} />
            </section>
            <section className="normal-text">
                <NormalText text={introText} />
            </section>
        </header>
    );
};
