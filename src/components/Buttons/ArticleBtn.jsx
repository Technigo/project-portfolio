import "./Buttons.css";
import { BsFileText } from "react-icons/bs";

export const ArticleBtn = ({ article_url }) => {
  return (
    <div className="link-btn">
      <a
        href={article_url}
        className="article-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="Read the article in a new tab"
      >
        <BsFileText className="btn-icon" />
        Read article
      </a>
    </div>
  );
};
