import "./footer.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";




export const Footer = () => {
    return (
        <header>
            <section className="contact-container">
                <MainTitle text={"Let's Talk!"} />
            </section>
            <section className="contact-image">
                <CircleImage />
            </section>

            <section className="contact-text">
                <h2>Evelyn Del Carmen</h2>
                <h2>+46 (0)704420524</h2>
                <h2>hey@evelyndelcarmen.com</h2>
            </section>
        </header>
    );
};