import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { MainHeading } from "../Typography/MainHeading";
import { SocialIcons } from "../Button/SocialIcons.jsx";

import "./Contact.css";

// This component renders a contact section with a main heading, profile picture and some contact information.
export const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-frame">
        <MainHeading className="talk" text={"Let's talk"} />
        <ProfilePicture />
        <div className="facts">
          <p>Susanne Ekenheim</p>
          <p>+46(0)723 70 62 25</p>
          <p className="email">susanne.ekenheim@gmail.com</p>
        </div>
        <div className="social-icons">
          <SocialIcons
            text={"Link to GitHub"}
            src={"/public/btn-sociallinks-github-default.svg"}
            link={"https://github.com/smExlex"}
            className={"link-github"}
          />
        </div>
      </div>
    </section>
  );
};
