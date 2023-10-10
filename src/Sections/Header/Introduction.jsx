import "./header.css";
// import { MainHeading } from "../../ReusableComponents/Typography/MainHeading.jsx";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { ProfileImage } from "../../ReusableComponents/ImageElements/ProfileImage.jsx";
import { NormalText } from "../../ReusableComponents/Typography/NormalText.jsx";

const introText = "Laura is a frontend developer with a background in web design, known for her keen eye for details and ability to learn new technologies, languages and programs. She creates applications with both the designer and user in mind, and does so with constant smile on her face. Her drive for perfection and her background in design makes her a valuable asset to any project and a standout in the technology field.";

export const Introduction = () => {
    return (
        <header>
            <section className="profile-image">
                <ProfileImage />
            </section>
            <section className="headings">
                <SubHeading text={"Hi, I'm Laura Lyckholm"} />
                <h1 className="introduction-h2">Frontend Developer & Web Designer</h1>
            </section>
            <section className="intro-text">
                <NormalText text={introText} />
            </section>
        </header>
    )
}