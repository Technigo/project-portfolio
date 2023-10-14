import "./articles.css";
import { ArticleCard } from "../components/ArticleCard";

export const Articles = () => {
  return (
    <section className="articles" id="articles">
      <div className="wavy-line-wrapper"></div>
      <div className="page-wrapper">
        <div className="page-container bg-page-container">
          <h2 className="page-title">My words</h2>
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};
