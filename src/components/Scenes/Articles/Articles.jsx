import "./Articles.css";
import { ArticleCard } from "./ArticleCard/ArticleCard";

export const Articles = () => {
  return (
    <section id="articles" aria-label="My Articles section">
      <div className="wavy-line-wrapper"></div>
      <div className="page-wrapper">
        <h2 className="page-title">My words</h2>
        <ArticleCard />
      </div>
    </section>
  );
};
