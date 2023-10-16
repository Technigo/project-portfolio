import { myWords } from "../../../../Data";
import { ArticleBtn } from "../../../Buttons/ArticleBtn";

export const ArticleCard = () => {
  return (
    <div className="articles-container">
      {myWords.map(
        ({ title, id, text, image, imageAlt, date, article_url }) => {
          return (
            <div className="article-item" key={id}>
              <img
                src={image}
                alt={imageAlt}
                className="article-image-border"
              />
              <div className="article-heading">
                <div className="tag">
                  <span>{date}</span>
                </div>
                <h3>{title}</h3>
              </div>
              <p className="text-css">{text}</p>
              <ArticleBtn article_url={article_url} />
            </div>
          );
        }
      )}
    </div>
  );
};
