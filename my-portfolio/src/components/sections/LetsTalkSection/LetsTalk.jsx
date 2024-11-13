import "./LetsTalk.css";
import profileImg from "../../../assets/profile-img.jpg";
import { H2, BodyTextLarge } from "../../ui/Typography/Typography";
import { IconButton } from "../../ui/Buttons/IconButtons";

export const LetsTalk = () => {

  const iconData = [
    { id: 1, iconName: "linkedin", onClick: () => window.open("https://www.linkedin.com", "_blank")
    },
    { id: 2, iconName: "github", onClick: () => window.open("https://github.com", "_blank")
    },
    { id: 3, iconName: "stackOverflow", onClick: () => window.open("https://stackoverflow.com", "_blank")
    },
    { id: 4, iconName: "twitter", onClick: () => window.open("https://twitter.com", "_blank")
    },
    { id: 5, iconName: "instagram", onClick: () => window.open("https://www.instagram.com", "_blank")
    },
  ];

return (
  <section className="talk-card">
    <div className="content-card">
      <H2>Lets talk</H2>
      <img className="profile-img" src={profileImg} alt="profile picture" />
      <div className="contact-section">
        <BodyTextLarge>Fanny Henriques</BodyTextLarge>
        <BodyTextLarge>+46(0)763 12 33 45</BodyTextLarge>
        <BodyTextLarge>sara.svensson@mail.com</BodyTextLarge>
      </div>
      <div className="icons-container">
        {iconData.map(({ id, iconName, onClick }) => (
        <IconButton key={id} iconName={iconName} onClick={onClick} />
        ))}
      </div>
    </div>
  </section>
  );
};