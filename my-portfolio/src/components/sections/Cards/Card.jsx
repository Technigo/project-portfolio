/* eslint-disable react/prop-types */
import "./Card.css";
import { BodyText, H3 } from "../../ui/Typography/Typography.jsx";
import { Button } from "../../ui/Buttons/Button.jsx";
import iconWeb from "../../../assets/iconWeb.svg";
import iconGithubWhite from "../../../assets/iconGithubWhite.svg";
import iconWebWhite from "../../../assets/iconWebWhite.svg";
import { Tag } from "../../ui/Tags/Tags.jsx";

export const Card = ({ 
  imageSource, 
  sectionType, 
  cardTag, 
  cardTitle, 
  cardDescription, 
  netlify,
  github,
  link,
}) => {
return (
  <article className={`${sectionType}-card`}>
    <img 
    src={imageSource} 
    className={`${sectionType}-img`}
    alt="portfolio-img" 
    />
    <div className={`${sectionType}-info-box`}>
    <div className="tags-container"> 
      {Array.isArray(cardTag)
          ? cardTag.map((tag, index) => <Tag key={index} sectionType={sectionType} text={tag} />)
          : <Tag sectionType={sectionType} text={cardTag} />}
      </div>
      <H3>{cardTitle}</H3>
      <div className="description-box"> 
      <BodyText>{cardDescription}</BodyText>
      <div className="button-container">
        {sectionType === "project" ? (
          <>
            <Button text="Live Demo" 
            icon={iconWeb} 
            sectionType={sectionType}
            onClick={() => window.open(netlify, "_blank")}
            />
            <Button text="View Code" 
            icon={iconGithubWhite} 
            sectionType={sectionType}
            onClick={() => window.open(github, "_blank")}
            />
            </>
        ) : (
          <Button text="Read Article" 
          icon={iconWebWhite} 
          sectionType={sectionType}
          onClick={() => window.open(link, "_blank")}
          />
        )}
      </div>
      </div>
    </div>
  </article>
);
};

