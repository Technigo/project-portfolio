import { Headline } from "./Headlines";
import { LinkButton } from "./LinkButton";
import React from "react";
import "./Contact.css";

//My contact information and buttons/links to different channels to reach me //
export const Contact = () => {
  return (
    <div className="contact">
      <h1>Let's talk!</h1>
      <div className="image">
        <img src="./src/pictures/me.jpg" alt="" />
      </div>
      <h2>Emmy Jansson</h2>
      <h3>Mobile: +4673-719 77 49</h3>
      <h3>E-mail: emmybengtsson@live.se</h3>
      <div className="contact-buttons">
        <LinkButton
          buttonText=""
          url="https://www.instagram.com/emmy.linneaa/"
          icon="./public/instagram.png"
        />
        <LinkButton
          buttonText=""
          url="https://www.linkedin.com/in/emmy-jansson-2104a3293/"
          icon="./public/linkedin.png"
        />
        <LinkButton
          buttonText=""
          url="https://stackoverflowteams.com/c/technigo/users/520/?tab=profile"
          icon="./public/stackoverflow.png"
        />
        <LinkButton
          buttonText=""
          url="https://github.com/EmmyLJ/"
          icon="./public/github.png"
        />
      </div>
    </div>
  );
};
