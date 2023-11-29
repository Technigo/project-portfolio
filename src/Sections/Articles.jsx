import { Headline } from "./Headline";
import articles from "../../articles.json";
import { ArticleCard } from "../components/ArticleCard";
import "./Articles.css";

export const Articles = () => {
  return (
    <>
      <div className="box">
        <div className="article-container wave">
          <div className="articles">
            <Headline text="My words" level={1} />
            <div className="article-grid">
              {articles.articles.map((articles) => (
                <ArticleCard
                  key={articles.name}
                  name={articles.name}
                  photo={articles.image}
                  tags={articles.tags}
                  text={articles.text}
                  links={{ link: articles.link }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
