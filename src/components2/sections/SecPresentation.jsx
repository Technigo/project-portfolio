import React from "react";
import { RoundImg } from "../../components/images/RoundImg";
import { HeadingH1 } from "../../components/typography/headingH1/HeadingH1"
import { HeadingH4 } from "../../components/typography/headingH4/HeadingH4";
import { NormalText } from "../../components/typography/normalText/NormalText";

const presentationText =
  "Emmy is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

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
