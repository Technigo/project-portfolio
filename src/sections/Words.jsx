import { Heading } from "../ui/Heading";
import articlesData from "../data/articles.json";
import "./Words.css";
import { ArticleCard } from "../ui/ArticleCard"; // Adjust path as necessary

export const Words = () => {
  return (
    <section className="articles-section">
      <Heading heading="My Words" level={2} className="articles-heading" />
      <div className="article-cards">
        {articlesData.Articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            description={article.description}
            title={article.name}
            link={article.Link} // Use the key from your JSON
          />
        ))}
      </div>
    </section>
  );
};
