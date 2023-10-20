import { SubHeading } from "../SubHeading/SubHeading.jsx";
import { BodyText } from "../Typo/BodyText.jsx";
import { Button } from "../Button/Button.jsx";
import articles from "../../Data/articles.json";

export const ArticleCard = () => {
  console.log("Here comes the articles:", articles);

  return (
    <div className="article-cards">
      {articles.map((article) => {
        return (
          <div className="single-article" key={article.id}>
            <img
              className="article-img"
              src={article.image}
              alt={article.imageAlt}
            />
            <p className="article-date">{article.date}</p>
            <SubHeading className={`dark-h3`} text={article.name} />
            <BodyText text={article.text} />
            <Button
              className={`article-button`}
              buttonName={`Read Article`}
              link={article.link}
              iconAlt={`A document icon`}
            />
          </div>
        );
      })}
    </div>
  );
};
