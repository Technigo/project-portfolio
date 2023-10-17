import { Buttons } from "../Components/Buttons";

import "./Article.css"; 

export const Article = ({ imageURL, title, date, articleText, sectionId }) => {
  return (
    <div className="article-card">
      <img src={imageURL} className="post-image" />
      <span className="date">{date}</span>
      <h3>{title}</h3>
      <p>{articleText}</p>
      <Buttons sectionId={sectionId} />
    </div>
  )
}
