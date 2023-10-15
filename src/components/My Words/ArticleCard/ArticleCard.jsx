import { SubHeading } from "../../Headings/SubHeading/SubHeading";
import { Button } from "../../Buttons/Button";
import articles from "../../../articles.json";
import "./ArticleCard.css";

export const ArticleCard = () => {
  return (
    <div className="article-card">
      {articles.map((article, index) => (
        <div key={index}>
          <SubHeading className={"my-words-h3"} text={article.articleName} />
          <div className="article-photo-wrapper">
            <img src={article.imageUrl} alt={article.imageAlt} />
          </div>
          <p>{article.articleBrief}</p>
          <Button
            className={`article-button`}
            buttonName={`Read article`}
            link={article.articleLink}
            icon={`public/assets/Doc-article.svg`}
            iconAlt={`Read the article, opening in a new window`}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      ))}
    </div>
  );
};
