/* eslint-disable react/prop-types */
import "./Card.css"
import { BodyText } from "../../ui/Typography/Typography.jsx"
import { Button } from "../../ui/Buttons/Button.jsx";
import iconWeb from "../../../assets/iconWeb.svg";
import iconGithubWhite from "../../../assets/iconGithubWhite.svg";
import iconWebWhite from "../../../assets/iconWebWhite.svg";

export const Card = ({ imageSource, sectionType, children, cardTitle, cardDescription }) => {
  return (
    <article className={`${sectionType}-card`}>
      <img src={imageSource} className={`${sectionType}-img`} />
      <div className="info-box">
      <div className="tags-container"> 
        {children} 
        </div>
        <BodyText>{cardTitle}</BodyText>
        <BodyText>{cardDescription}</BodyText>
        <div className="button-container">
          {sectionType === "project" ? (
            <>
              <Button text="Live Demo" icon={iconWeb} sectionType={sectionType}
                onClick={() => { }} />
              <Button text="View Code" icon={iconGithubWhite} sectionType={sectionType}
                onClick={() => { }} />
            </>
          ) : (
            <Button text="Read Article" icon={iconWebWhite} sectionType={sectionType}
              onClick={() => { }} />
          )}
        </div>
      </div>
    </article>
  );
};

