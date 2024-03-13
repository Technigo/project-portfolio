import { Buttons } from "../Components/Buttons";

import "./Article.css"; 

export const Article = ({ imageURL, title, date, articleText, link, sectionId }) => {
  return (
    <div className="article-card">
      <img src={imageURL} className="post-image" />
      <span className="date">{date}</span>
      <h2>{title}</h2>
      <p>{articleText}</p>
      <Buttons sectionId={sectionId} link={link} />
    </div>
  );
};
