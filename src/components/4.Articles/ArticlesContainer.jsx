import { Articles } from "./Articles";
import "./ArticlesContainer.css";

export const ArticlesContainer = () => {
  return (
    <>
      <div className="wavy-divider"></div>
      <div className="articles-container">
        <div className="article-box">
          <h2 className="articles-heading">My words</h2>
          <Articles />
        </div>
      </div>
    </>
  );
};
