import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, description, imageUrl, date, url }) { // Add 'url' to the props
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <p className="date-label">{date}</p>
      <h3 className="article-title">{title}</h3>
      <p className="article-description">{description}</p>
      <a href={url} className="read-article-link"> {/* Use the 'url' prop for the hyperlink */}
        <button className="read-article-button">Read article</button>
      </a>
    </div>
  );
}


export default ArticleCard;

