/* eslint-disable react/prop-types */
import "./Card.css"
import { H3, BodyText } from "../../ui/Typography/Typography.jsx"
import { Button } from "../../ui/Buttons/Button.jsx";
import { Tag } from "../../ui/Tags/Tags.jsx";
import iconWeb from "../../../assets/iconWeb.svg";
import iconGithubWhite from "../../../assets/iconGithubWhite.svg";
import iconWebWhite from "../../../assets/iconWebWhite.svg";

import iconGithub from "../../../assets/iconGithub.svg";


export const Card = ({ imageSource, sectionType, cardTag, cardTitle, cardDescription, Tag }) => {
  return (
    <article className={`${sectionType}-card`}>
      <img src={imageSource} className={`${sectionType}-img`} />
      <div className="info-box">
        <Tag className={`${sectionType}-box`}> text={cardTag}</Tag>
        <H3>{cardTitle}</H3>
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

