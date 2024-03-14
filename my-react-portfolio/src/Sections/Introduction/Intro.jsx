import "./intro.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SmallSubTitle } from "../../ReusableComponents/Texts/SmallSubTitle"
import evelynImage from "../../assets/cvimage/evelyn.png";
import { ArrowDownAnimation } from "../../ReusableComponents/Animation/Arrow/ArrowDownAnimation";

const introText = "Fueled by her passion for visual communication, Evelyn works as a creative Frontend Developer and Photographer. She has a degree in Photography and Fullstack Web Development that she uses to create user-friendly applications on the daily. "

export const Intro = () => {
    return (
        <header>
            <section className="profile-image">
                <CircleImage className="profile-img" src={evelynImage} alt="evelyn profile image" />
            </section>
            <section className="headings">
                <SmallSubTitle className="subtitle" text={"Hi! I am Evelyn Del Carmen"} />
                <MainTitle className="maintitle" text={"Frontend Developer"} />
            </section>
            <section className="intro-text">
                <NormalText className="normaltext" text={introText} />
            </section>
            <div className="arrow-container">
                <ArrowDownAnimation className="arrow-down" aria-label="this is a arrow down" />
            </div>
        </header>
    );
};
