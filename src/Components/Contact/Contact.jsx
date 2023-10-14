import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { Heading1 } from "../Heading1/Heading1";
import { SocialIcons } from "../SocialIcons/SocialIcons";

import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-frame">
        <Heading1 className="talk" text={"Let's talk"} />
        <ProfilePicture />
        <div className="facts">
          <p>Susanne Ekenheim</p>
          <p>+46(0)723 70 62 25</p>
          <p className="email">susanne.ekenheim@gmail.com</p>
        </div>
        <SocialIcons />
      </div>
    </section>
  );
};
