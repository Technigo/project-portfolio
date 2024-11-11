import { useState } from "react";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import { ArrowButton } from "../components/ArrowButton/ArrowButton";
import { Grid } from "../ui/Grid/Grid";
import { SectionTitle } from "../ui/Typography/Typography";
import data from "../../articles.json";
import "./ArticleSection.css";

export const ArticleSection = () => {
  const [visibleArticles, setVisibleArticles] = useState(3); // Show 3 articles
  const articles = data.articles;

  const handleShowMore = () => {
    setVisibleArticles((prevCount) => prevCount + 2); // Show 2 more articles
  };
  return (
    <Grid background="black">
      <section className="article-section">
        <SectionTitle>My Words</SectionTitle>
        <div className="article-cards">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              date={article.date}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
        {visibleArticles < articles.length && (
          <ArrowButton
            text="See more articles"
            variant="white-on-black"
            onClick={handleShowMore}
          />
        )}
      </section>
    </Grid>
  );
};
