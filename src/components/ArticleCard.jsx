import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, description, imageUrl, date }) { // Include 'date' in the props
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <p className="date-label">{date}</p> {/* Display the passed date */}
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      <button className="read-article-button">Read article</button>
    </div>
  );
}

export default ArticleCard;

