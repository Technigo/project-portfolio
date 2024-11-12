import "./LetsTalk.css"
import profileImg from "../../../assets/profile-img.jpg";
import { H2, BodyText } from "../../ui/Typography/Typography";
import { IconButton } from "../../ui/Buttons/IconButtons";

export const LetsTalk = () => {

  const iconData = [
    { id: 1, iconName: "facebook", onClick: () => { console.log("Facebook clicked"); } },
    { id: 2, iconName: "linkedin", onClick: () => { console.log("LinkedIn clicked"); } },
    { id: 3, iconName: "twitter", onClick: () => { console.log("Twitter clicked"); } },
    { id: 4, iconName: "instagram", onClick: () => { console.log("Instagram clicked"); } },
    { id: 5, iconName: "github", onClick: () => { console.log("GitHub clicked"); } },
  ];

  return (
    <section className="talk-card">
      <div className="content-card">
        <H2>Lets talk</H2>
        <img className="profile-img" src={profileImg} alt="profile picture" />
        <div className="contact-section">
          <BodyText>Fanny Henriques</BodyText>
          <BodyText>+46(0)763 12 33 45</BodyText>
          <BodyText>sara.svensson@mail.com</BodyText>
        </div>
        <div className="icons-container">
          {iconData.map(({ id, iconName, onClick }) => (
          <IconButton key={id} iconName={iconName} onClick={onClick} />
          ))}
        </div>
      </div>
    </section>
  );
  ;
}