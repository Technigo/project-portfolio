import { myWords } from "../Data";
import { ArticleLinkBtn } from "./LinkBtns";
import "./articleCard.css"

export const ArticleCard = () => {
  return (
    <div className="articles-container">
      {myWords.map(({ title, id, text, image, imageAlt, date, article_url }) => {
        return (
          <div className="article-item card" key={id}>
            <img src={image} alt={imageAlt} className="article-image-border"/>
            <div className="article-heading">
                <div className="tags">
                    <span>{date}</span>
                </div>
                <h3>{title}</h3>
            </div>
            <p className="text-css">{text}</p>
            <ArticleLinkBtn article_url={article_url} />
          </div>
        );
      })}
     
    </div>
  );
};
