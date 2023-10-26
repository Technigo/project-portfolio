import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, description, imageUrl }) {
  return (
    <div className="article-card">
      <img src={imageUrl} alt="Article" className="article-image" />
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      <button className="read-article-button">Read article</button>
    </div>
  );
}

export default ArticleCard;
