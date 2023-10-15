import { MainHeading } from "../Headings/MainHeading/MainHeading";
import { SubHeading } from "../Headings/SubHeading/SubHeading";
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto";
import { Button } from "../Buttons/Button";
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
        </div>
        <div className="contact-links">
          <Button
            className={`linkedin-button`}
            link={`www.linkedin.com/in/anna-robertsson-829967272`}
            icon={`/assets/GreyLinkedIn.svg.svg`}
            iconAlt={`Clickable icon of the LinkedIn logo`}
          />
          <Button
            className={`github-button`}
            link={`https://github.com/AnnaRobertsson`}
            icon={`/assets/GreyGitHub.svg.svg`}
            iconAlt={`Clickable icon of the GitHub logo`}
          />
        </div>
      </div>
    </div>
  );
};
