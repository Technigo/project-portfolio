import "./mywords.css";
import squiggly from "../../assets/squiggly.svg";
import articleData from "../../assets/articles.json";
import { ArticleCard } from "../../components/articlecard/ArticleCard";

export const MyWords = () => {
  const articles = articleData.articles;
  // console.log(articles);
  return (
    <div className="my-words-frame">
      <img src={squiggly} alt="squiggly-line" className="squiggly" />
      <div className="my-words-container">
        <div className="my-words">
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
    </div>
  );
};
