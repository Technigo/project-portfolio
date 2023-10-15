import "./header.css";
import { SubHeading } from "../../ReusableComponents/Typography/SubHeading.jsx";
import { NormalText } from "../../ReusableComponents/Typography/NormalText.jsx";
import { ImageComponent } from "../../ReusableComponents/ImageElements/ImageComponent";

const introText = "Laura is a frontend developer with a background in web design, known for her keen eye for details and ability to learn new technologies, languages and programs. She creates applications with both the designer and user in mind, and does so with a constant smile on her face. Her drive for perfection and her background in design makes her a valuable asset to any project and a standout in the technology field.";

// Component for the introduction section. Structure of the section is set up and all relevant information is injected. I decided to put the introtext in it's own variable for a cleaner code in the component it self.  
export const Introduction = () => {
    return (
        <header>
            <ImageComponent sectionClassName={"profile-image"} elementClassName={"circle-img"} link={"/profile-image.jpg"} ImageAltText={"Profile Image of Laura"} />
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