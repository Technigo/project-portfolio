/* eslint-disable react/prop-types */
import './ArticleCard.css';
import { Button } from './Button';
import Web_Icon from '../assets/Web_Icon_Black.svg'; // Import the icon you want to use

export const ArticleCard = ({ image, title, description, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <span className="article-date">October 21</span>
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button
            text="Read Article"
            onClick={() => window.open(link, "_blank")}
            icon={Web_Icon}
            className="white-button" // Add a specific class for styling
          />
        </a>
      </div>
    </div>
  );
};
