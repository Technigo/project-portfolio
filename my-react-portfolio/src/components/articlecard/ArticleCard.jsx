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
      <p>Image</p>
      <ArticleMonth
        articlePublished={monthPublished}
        className="article-month"
      />
          <h3 className="article-title">{articleTitle}</h3>
          <p className="article-intro">{articleIntro}</p>
          <button className="readMoreBtn" href={articleLink} target="_blank" rel="noreferrer">
              <img src={readMore} alt="read-more-icon"/> Read article
          </button>
    </div>
  );
};
