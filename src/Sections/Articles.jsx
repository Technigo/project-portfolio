import { Headline } from "./Headline";
import articles from "../../articles.json";
import { ArticleCard } from "../components/ArticleCard";
import "./Articles.css";
import dividerPath from "../assets/divider.svg";

export const Articles = ({ name, photo, tags, text }) => {
  const imgStyle = {
    fill: "blue", // Set your desired color here
    width: "100%",
  };

  return (
    <>
      <img src={dividerPath} style={imgStyle} alt="Divider" />

      {/* <div
        className="wave"
        style={{
          width: "100%",

          padding: "14px",
          marginTop: "10px",
        }}
      /> */}

      <div className="articles">
        {/* <img src={divider} className="divider"></img> */}
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
