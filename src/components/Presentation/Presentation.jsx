import React from "react";
import { Headline } from "../Headline/Headline";
import { Image } from "../Image/Image";
import avatar from "../../assets/avatar.png";
import { Arrow } from "../Arrow/Arrow";
import "./Presentation.css";

export const Presentation = () => (
  <>
    <div className="presentation-container">
      <div className="avatar-container">
        <Image src={avatar} alt="Manne Johansson Avatar" className="avatar" />
      </div>

      <div className="headline-container">
        <Headline text="Hi, I'm Manne Johansson" level={3} />
      </div>

      <div className="subheadline-container">
        <Headline text="Frontend Developer" level={1} />
      </div>

      <div className="description-container">
        <p className="description">
          Manne stands out as a phenomenal developer, renowned for crafting
          innovative solutions and showcasing extraordinary coding skills. He
          effortlessly engineers user-centric applications and navigates through
          complex problems with ease. His relentless pursuit of excellence not
          only elevates him in the technology arena but also renders him an
          invaluable contributor to any project.
        </p>
      </div>
    </div>
  </>
);
