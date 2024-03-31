import { articles } from "../../../articles.json";
import { Button } from "../resuable/Button";
import "./Articles.css";

const documentIcon = "../../assets/doc.svg";

export const Articles = () => {
  return (
    <div className="Articles">
      {articles.map((article, index) => (
        <section className="article-card" key={index}>
          <div className="article-image">
            <img
              src={article.image}
              alt={`image of article ${article.title}`}
              className="article-image-card"
            />
          </div>
          <div className="article-info">
            <p className="article-tag">{article.releaseDate}</p>
            <h4 className="article-title">{article.title}</h4>
          </div>
          <p className="article-description">{article.description}</p>
          <div className="article-button" aria-label="Read more button">
            <Button
              url={article.link}
              icon={documentIcon}
              text={"Read article"}
              className={"article-btn"}
              hoverIcon={documentIcon}
            />
          </div>
        </section>
      ))}
    </div>
  );
};
