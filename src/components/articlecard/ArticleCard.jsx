import "./articlecard.css";
import { ArticleMonth } from "./ArticleMonth";
import readMore from "../../assets/readarticle.svg";

export const ArticleCard = ({
  monthPublished,
  articleTitle,
  articleIntro,
  articleLink,
  articleImage,
}) => {
  return (
    <div className="article-card">
      <img src={articleImage} alt={articleTitle} className="article-image" />
      <div className="date-and-title">
        <ArticleMonth
          articlePublished={monthPublished}
          className="article-month"
        />
        <h3 className="article-title">{articleTitle}</h3>
      </div>
      <p className="article-intro">{articleIntro}</p>
      <button
        className="readMoreBtn"
        href={articleLink}
        target="_blank"
        rel="noreferrer"
      >
        <img src={readMore} alt="read-more-icon" />
        <span className="btnText">Read article</span>
      </button>
    </div>
  );
};
