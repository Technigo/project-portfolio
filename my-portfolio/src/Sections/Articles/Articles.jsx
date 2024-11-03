// Articles.jsx

import { ArticleCard } from "./ArticleCard/ArticleCard";
import { articles } from "../../articles.json"
import "./Articles.css"

export const Articles = () => {
  return (
    <section className="articles-container">
      <h2>My Journey</h2>
      <div className="project-container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            heading={article.heading}
            date={article.date}
            image={article.image}
            content={article.content}
            url={article.url}
          />
        ))}
      </div>
    </section>
  );
};