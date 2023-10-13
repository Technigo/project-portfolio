import React from 'react';
import './ArticleCard.css';
import { Button } from '../button/Button'

export const ArticleCard = ({ article }) => {
  return (

        <div className="article-card">
        <div className="article-image-wrapper">
        <img src={article.image} alt={article.name} className="article-image" />
        </div>
      <h2>{article.name}</h2>
      <p>{article.description}</p>
      <p><small>{article.time}</small></p>
      <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>

  );
};
