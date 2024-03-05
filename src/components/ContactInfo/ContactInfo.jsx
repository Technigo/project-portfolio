import { MainHeading } from "../Headings/MainHeading/MainHeading";
import { SubHeading } from "../Headings/SubHeading/SubHeading";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto";
import { SocialMediaLinks } from "../SocialMedia/SocialMediaLinks";
import "./ContactInfo.css";

export const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <MainHeading className={"contact-h2"} text={"Let's talk"} />
        <ProfilePhoto />
        <div className="phone-email">
          <SubHeading className={"contact-h3"} text={"Anna Robertsson"} />
          <SubHeading className={"contact-h3"} text={"+46(0)702 79 07 05"} />
          <SubHeading
            className={"contact-h3"}
            text={"robertsson_anna@hotmail.com"}
          />
          <SocialMediaLinks className={"contact-links"} />
        </div>
      </div>
    </div>
  );
};
