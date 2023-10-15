import React from 'react';
import './ArticleCard.css';
import { Button } from '../Button/Button'

export const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-image-wrapper">
        <img src={article.image} alt={article.name} className="article-image" />
      </div>
      <div className="article-details">
      <p><small className="article-time">{article.time}</small></p>
      <h2>{article.name}</h2>
      <p>{article.description}</p>
      <div className="link-container">
      <Button label="Medium" link={article.mediumLink} />
      </div>
    </div>
    </div>
  );
};
