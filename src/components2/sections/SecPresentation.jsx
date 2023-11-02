import React from "react";
import { RoundImg } from "../images/RoundImg";
import { HeadingH1 } from "../typography/headingH1/HeadingH1"
import { HeadingH4 } from "../typography/headingH4/HeadingH4";
import { NormalText } from "../typography/normalText/NormalText";

const presentationText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure ipsa! Reprehenderit natus perspiciatis, maxime quod sapiente nihil molestiae quasi libero tenetur animi quis illum modi consequatur sint repellat corporis!"

import "./sections.css";

export const SecPresentation = () => {
  return (
    <>
      <div className="presentation-wrapper">
        <div className="presentation-inner-wrapper">
          <div className="presentation-img">
            <RoundImg />
          </div>
          <div className="presentation-headings">
            <HeadingH4
              text={"Hi, I am Emmy Dieden"}
              className={"presentation-h4"}
            />
            <HeadingH1
              text={"Frontend Developer"}
              className={"presentation-h1"}
            />
          </div>
          <NormalText className={"presentation-text"} text={presentationText} />
        </div>
        <div className="arrow-box">
          <img
            src={"/assets/ArrowPositionUp.svg"}
            alt="Arrow that points down to next page"
          />
        </div>
      </div>
    </>
  );
};
