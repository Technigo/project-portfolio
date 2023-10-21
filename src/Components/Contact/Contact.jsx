import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { MainHeading } from "../Typo/MainHeading";

import "./Contact.css";

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
            src={"public/btn-sociallinks-github-default.svg"}
            link={"https://github.com/smExlex"}
            className={"link-github"}
          />
          <SocialIcons
            text={"Link to LinkedIn"}
            src={"public/btn-sociallinks-linkedin-default.svg"}
            link={"https://www.linkedin.com/in/susanne-e-6915a087/"}
            className={"link-linkedin"}
          />
        </div>
      </div>
    </section>
  );
};
