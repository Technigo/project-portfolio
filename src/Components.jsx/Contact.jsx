import { Headline } from "./Headlines";
import { LinkButton } from "./LinkButton";
import React from "react";

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
          buttonText="Instagram"
          url="https://www.instagram.com/emmy.linneaa/"
          icon="./Icons/instagram.png"
        />
      </div>
    </div>
  );
};
