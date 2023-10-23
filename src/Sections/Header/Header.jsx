import "./header.css";
import { SubHeading } from "../../ReusableComp/Typo/SubHeading";
import { NormalText } from "../../ReusableComp/Typo/NormalText";
import { ImageComponent } from "../../ReusableComp/ImageElements/ImageComp";

const introText = "Jenny is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence and problem solving makes her a valuable asset to any project and a standout in the technology field."

export const Header = () => {
    return (
        <header tabIndex="0">
            <ImageComponent 
            sectionClassName={"profile-image"} 
            elementClassName={"circle-img"} 
            imagePath={"./profilepic.jpg"}
            ImageAltText={"Picture of Jenny"} />
            <section className="headings">
                <SubHeading text={"Hi, I'm Jenny Larsen"} />
                <h1 className="introduction-h2">Frontend Developer with a background in communications</h1>
            </section>
            <section className="intro-text">
                <NormalText text={introText} />
            </section>
        </header>
    )
}