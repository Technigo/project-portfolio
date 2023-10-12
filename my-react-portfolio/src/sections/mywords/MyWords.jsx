import "./mywords.css";
import squiggly from "../../assets/squiggly.svg";
import articleData from "../../assets/articles.json";
import { ArticleCard } from "../../components/articlecard/ArticleCard";

export const MyWords = () => {
  const articles = articleData.articles;
  console.log(articles);
  return (
    <div className="my-words">
      <div className="divider">
        <img src={squiggly} alt="squiggly-line" className="squiggly" />
      </div>
      <div className="my-words-container">
        <h2 className="my-words-title">My words</h2>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            articleTitle={article.name}
            articleIntro={article.description}
            articleImage={article.image}
            articleLink={article.link}
            monthPublished={article.monthPublished}
          />
        ))}
      </div>
    </div>
  );
};
