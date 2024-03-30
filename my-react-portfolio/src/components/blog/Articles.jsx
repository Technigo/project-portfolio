import { Header } from "../common/Header";
import { ArticleCard } from "./ArticleCard";
import "./articles.css";
import dataArticles from "./articles.json";

export const Articles = () => {
  return (
    <article className="article-container">
      <Header level={1} text="My words" className="article-heading" />
      <div className="article-list">
        {dataArticles.articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
            tagText={article.tagText}
            description={article.description}
            link={article.link}
          />
        ))}
      </div>
    </article>
  );
};
