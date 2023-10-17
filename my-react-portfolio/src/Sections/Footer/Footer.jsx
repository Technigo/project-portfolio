import "./footer.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";

export const Footer = () => {
  return (
    <header>
      <section className="main-title">
        <MainTitle text={"Let's Talk!"} />
      </section>
      <section className="profile-image">
        <CircleImage />
      </section>

      <section className="normal-text">
        <h2>Hamdi Olad</h2>
        <h2>+46 (0)765669571</h2>
        <h2>oladhamdi@gmail.com</h2>
      </section>
    </header>
  );
};
