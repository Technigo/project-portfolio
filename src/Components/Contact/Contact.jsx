import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";

import "./Contact.css";
import { Heading1 } from "../Heading1/Heading1";

export const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-frame">
        <Heading1 text={"Let's talk"} />
        <ProfilePicture />
        <div className="facts"></div>
      </div>
    </section>
  );
};
