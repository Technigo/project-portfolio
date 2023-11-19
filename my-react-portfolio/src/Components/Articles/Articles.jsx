import "./Articles.css"
import articleData from "../../articleData.json"
import { CardHeading } from "../../ReusableComponents/CardHeading.jsx"
import { ArticleCard } from "./ArticleCard";

let articleArray = articleData.articles;
console.log(articleArray);

export const Articles = () => {
  return (
    <div className="article-container">
      <CardHeading className="purple-main-heading" text="My words" />
      <div className="article-wrapper">
        {articleArray.map((article, index) => (
          <ArticleCard key={index} articles={article} />

        )
        )}
      </div>
    </div>
  )
}

