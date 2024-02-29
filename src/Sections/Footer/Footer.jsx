import "./footer.css";
import { ImageComponent } from "../../ReusableComp/ImageElements/ImageComp";
import { MainHeading } from "../../ReusableComp/Typo/MainHeading";
import { SubHeading } from "../../ReusableComp/Typo/SubHeading";

export const Footer = () => {
    return (
        <footer>
            <MainHeading text={"Let's talk"} />
            <ImageComponent 
            sectionClassName={"profile-image"} 
            elementClassName={"circle-img"} 
            imagePath={"./profilepic.jpg"}
            ImageAltText={"Image of Jenny"} />
            <div className="contact-info">
                <SubHeading text={"Jenny Larsen"} />
                <a aria-label="Phone number" href="tel:+0727402484">
                    <SubHeading text={"+46(0)72 74 02 484"} />
                </a>
                <a aria-label="E-mail adress" href="mailto:jennymarikalarsen@gmail.com">
                    <SubHeading text={"jennymarikalarsen@gmail.com"} />
                </a>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/jenny-larsen-b51140219/">
                    <ImageComponent 
                    sectionClassName={"icon-box"} 
                    elementClassName={"icon"} 
                    imagePath={"/icons/linkedin.svg"} 
                    ImageAltText={"Link to LinkedIn"} />
                </a>
                <a href="https://github.com/jennylarsen">
                    <ImageComponent 
                    sectionClassName={"icon-box"} 
                    elementClassName={"icon"} 
                    imagePath={"/icons/github.socials.svg"} 
                    ImageAltText={"Link to GitHub"} />
                </a>
            </div>
        </footer>
    )
}