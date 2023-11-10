import { Headline } from "./Headline";
import articles from "../../articles.json";
import { ArticleCard } from "../components/ArticleCard";
import "./Articles.css";

export const Articles = ({ name, photo, tags, text }) => {
  return (
    <>
      <div
        className="wave"
        style={{
          width: "100%",

          padding: "14px",
          marginTop: "10px",
        }}
      />

      <div className="articles">
        {/* <img src="/src/assets/path.png" className="path"></img> */}
        <Headline text="My words" level={1} />
        <div className="article-grid">
          {articles.articles.map((articles) => (
            <ArticleCard
              key={articles.name}
              name={articles.name}
              photo={articles.image}
              tags={articles.tags}
              text={articles.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};
