/* eslint-disable react/prop-types */
/*// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "./mywordscard.css";
import MainTitle from "../../ReusableComponents/Texts/MainTitle";

const MyWordsCard = ({ mywords }) => {
  return (
    <div className="projWrapperMywords">
      <div className="projectContainer">
        <img src={mywords.image} height={200} alt="Project Image" />
        <div className="projectDescription">
          <a href={mywords.github} target="_blank" rel="noopener noreferrer">
            <MainTitle text={mywords.name} />
          </a>
          <h2 className="project-title">{mywords.name}</h2>

          <div className="readmeContent">
            <p>{mywords.description}</p>
          </div>
          <div className="project-tags">
            {mywords.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="project-buttons">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for MyWordsCard component
MyWordsCard.propTypes = {
  mywords: PropTypes.shape({
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    // Define other properties of 'mywords' here
  }).isRequired,
};

export default MyWordsCard; 

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./mywordscard.css";
import MainTitle from "../../ReusableComponents/Texts/MainTitle";

export const MyWordsCard = ({ mywords }) => {
  return (
    <div className="projWrapperMywords">
      <div className="projectContainer">
        <img src={mywords.image} height={200} alt="Project Image" />
        <div className="projectDescription">
          <a href={mywords.github} target="_blank" rel="noopener noreferrer">
            <MainTitle text={mywords.name} />
          </a>
          <h2 className="project-title">{mywords.name}</h2>

          <div className="readmeContent">
            <p>{mywords.description}</p>
          </div>
          <div className="project-tags">
            {mywords.tags.map((tag, index) => (
              <span key={index}></span>
            ))}
          </div>
          <div className="project-buttons">
            <button>button</button>
            <button>button</button>
            <button>button</button>
          </div>
        </div>
      </div>
    </div>
  );
};
*

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./mywordscard.css";
//import MainTitle from "../../ReusableComponents/Texts/MainTitle"; // Import MainTitle as default

import { Tag } from "../../ReusableComponents/Typography/Tag.jsx";
import { SubTitle } from "../../ReusableComponents/Text/SubTitle.jsx";
import { NormalTitle } from "../../ReusableComponents/Text/NormalTitle.jsx";
import { ProjectButton } from "../../ReusableComponents/Buttons/ProjectButtons.jsx";

// Component for each individual article-card. Takes in data as a prop from its parent the Articles.jsx where the import is made.
export const ArticleCard = ({ data }) => {
  const articles = data.articles;
  return (
    <>
     
      {articles.map((article) => {
        return (
          <article className="article-card" key={article.name}>
            <ImageComponent
              sectionClassName={"image"}
              elementClassName={"rectangle-img"}
              link={article.image}
              ImageAltText={article.name}
            />
            <div className="article-text-section">
              <div className="subheading-section">
                <Tag tagText={article.date} />
                <SubTitle text={article.name} />
              </div>
              <NormalTitle text={article.description} />
              <ProjectButton
                className={"read-more-btn"}
                btnURL={article.link}
                imgAlt={"Web icon"}
                iconURL={`/icons/read-more.svg`}
                btnText={"Read article"}
              />
            </div>
          </article>
        );
      })}
    </>
  );
};


*/
