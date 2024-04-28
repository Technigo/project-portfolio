import "./footer.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { LargeText } from "../../ReusableComponents/Texts/LargeText";
import { SmallSubTitle } from "../../ReusableComponents/Texts/SmallSubTitle";
//import { Icons } from "../../../public/icons";

//import hamdi from "./assets/hamdi.jpg";
import hamdi from "../../../public/assets/hamdi.jpg";

export const Footer = () => {
  return (
    <footer className="contact-container">
      <section className="contact-wrapper">
        <LargeText
          className="footer-heading"
          text="Let's talk!"
          aria-label="This is the footer heading"
        />
        <CircleImage
          className="profile-img"
          src={hamdi}
          alt="hamdis profile image"
        />

        <div className="contact-info">
          <SmallSubTitle text={"Hamdi Olad"} />
          <a href="tel:+46765669571">
            <SmallSubTitle text={"+46(0)765669571"} />
          </a>
          <a href="mailto:oladhamdi@gmail.com">
            <SmallSubTitle text={"oladhamdi@gmail.com"} />
          </a>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/hamdi-olad/">
            <img className="icons" src="/icons/linkedin4.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/hamdiolad">
            <img className="icons" src="/icons/github1.svg" alt="GitHub" />
          </a>
        </div>
      </section>
    </footer>
  );
};
