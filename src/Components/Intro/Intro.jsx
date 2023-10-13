import React from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";

import "./Intro.css";

export const Intro = () => {
  return (
    <section className="intro-wrapper">
      <ProfilePicture />
      <div className="info-text">
        <div>
          <h3>Hi, I'm Susanne Ekenheim</h3>
          <h1>Frontend Developer</h1>
        </div>
        <p>
          Susanne is an exceptional developer known for her innovative solutions
          and exceptional coding abilities. She creates user-friendly
          applications and solves complex issues with ease. Her drive for
          excellence makes her a valuable asset to any project and a standout in
          the technology field.
        </p>
      </div>
      <div className="arrow">
        <img src="/src/assets/arrow_up.svg" />
      </div>
    </section>
  );
};
