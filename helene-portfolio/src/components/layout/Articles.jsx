import { H2 } from "../common/Typography";
import articlesData from "../../data/articles.json";
import ArticleItem from "./ArticleItem";
import "./Articles.css";

const Articles = () => {
  return (
    <section className="section-articles section-spacing-vertical section-spacing-horizontal">
      <div className="grid-container">
        <div className="col-12">
          <H2 className="articles__title">Curated thoughts 💭</H2>
          <div className="articles">
            {articlesData.articles.map((article, index) => (
              <ArticleItem key={index} data={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
