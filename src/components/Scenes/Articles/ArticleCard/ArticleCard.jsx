import articles from "../../../../json/articles.json";
import { LinkButton } from "../../../LinkButton/LinkButton";
import { BsFileText } from "react-icons/bs";

export const ArticleCard = () => {
  return (
    <div className="articles-container">
      {articles.articles.map(
        ({ title, id, description, image, img_alt, date, article_url }) => {
          return (
            <div className="article-item" key={id}>
              <img
                src={image}
                alt={img_alt}
                className="article-image-border"
              />
              <div className="article-heading">
                <div className="tag">
                  <span>{date}</span>
                </div>
                <h3>{title}</h3>
              </div>
              <p className="text-css">{description}</p>
              <LinkButton
                url={article_url}
                className="article-btn"
                title="Read the article in a new tab"
                icon={<BsFileText className="btn-icon" />}
                text="Read article"
              />
            </div>
          );
        }
      )}
    </div>
  );
};
