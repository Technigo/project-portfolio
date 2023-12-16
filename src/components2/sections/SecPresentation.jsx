import React, {useRef} from "react";
import { RoundImg } from "../images/RoundImg";
import { HeadingH1 } from "../typography/headingH1/HeadingH1"
import { HeadingH4 } from "../typography/headingH4/HeadingH4";
import { NormalText } from "../typography/normalText/NormalText";

const presentationText = `I'm a creative and curious developer with a diverse background in both speech and language therapy and forestry science. My interest for solving complex communication puzzles as a speech and language therapist has translated into my passion for untangling coding challenges. When I'm not crafting code, you'll find me crafting, literally! My love for being creative also influences my work in development, where I aim to create attractive and user-friendly digital experiences.`

import "./sections.css";

export const SecPresentation = () => {
  const nextSectionRef = useRef(null)

  const handleArrowClick = () => {
    // Scroll to the next section when the arrow is clicked
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
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
            onClick={handleArrowClick}
          />
        </div>
      </div>
      <div ref={nextSectionRef}></div>
    </>
  );
};
