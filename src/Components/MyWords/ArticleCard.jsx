import { SubHeading } from "../Typography/SubHeading.jsx";
import { BodyText } from "../Typography/BodyText.jsx";
import { Button } from "../Button/Button.jsx";
import articles from "../../Data/articles.json";

// This component renders a list of article cards. Each card displays an image, date, heading, and a "Read Article" button. The content is generated dynamically based on the articles array.
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
              link={article.url}
              iconAlt={`A document icon`}
            />
          </div>
        );
      })}
    </div>
  );
};
