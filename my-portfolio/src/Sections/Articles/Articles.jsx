// Articles.jsx

import { ArticleCard } from "./ArticleCard/ArticleCard";
import { articles } from "../../articles.json"

export const Articles = () => {
  return (
    <>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          heading={article.heading}
          date={article.date}
          image={article.image}
          content={article.content}
        />
      ))}

    </>
  );
};