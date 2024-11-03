import { Tag } from './Tag.jsx';
import { articles } from './ArticlesArray.jsx';
import { BtnArticle } from './buttons/ButtonArticle.jsx';

import WEB from "../assets/Ic-Web.svg";

import "./Articles.css";



export const Articles = () => {
  return (
    <div className="articles-container">
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <div className="article-date">
                <Tag text={article.date} />
              </div>
              <h3>{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <BtnArticle url={article.articleLink} text="Read Article" img={WEB} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
