/* eslint-disable react/prop-types */
import './ArticleCard.css';

export const ArticleCard = ({ image, title, description, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <span className="article-date">October 21</span> {/* Add the date here */}
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="article-button">Read Article</button>
        </a>
      </div>
    </div>
  );
};
