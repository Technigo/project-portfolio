import React from "react";
import articlesData from "../../articles.json";
import { MdArticle } from "react-icons/md";
import './Articles.css';

export const Articles = () => {
  return (
    <div>
      <h2 className="my-words-title">My words</h2>
      <div className="articles-container">
        {articlesData.articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />


            <div className="article-tags">
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="article-tag">{tag}</span>
              ))}
            </div>

            <div className="article-content">
              <h1 className="article-title">{article.title}</h1>
              <p className="article-body">{article.body}</p>

              <div className="article-buttons">
                <button className="article-button">
                  <a href={article.article} target="_blank" rel="noopener noreferrer" className="article-link"><MdArticle />Read article</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};