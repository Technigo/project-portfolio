import "./LetsTalk.css"
import profileImg from "../../../assets/profile-img.jpg";
import { H2, BodyText } from "../../ui/Typography/Typography"

export const LetsTalk = () => {
  return (
    <section className="talk-card">
      <div className="content-card">
        <H2>Lets talk</H2>
        <img src={profileImg} alt="profile picture" />
        <div className="contact-section">
          <BodyText>Fanny Henriques</BodyText>
          <BodyText>+46(0)763 12 33 45</BodyText>
          <BodyText>sara.svensson@mail.com</BodyText>
        </div>
      </div>
    </section>
  );
  ;
}