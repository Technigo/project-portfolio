/* eslint-disable react/prop-types */
import "./ArticleCard.css"
import { Button } from "./Button"
import Web_Icon from "../assets/Web_Icon_Black.svg"

export const ArticleCard = ({ image, title, description, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <button className="tag-button-date">
          <span className="article-date">October 21</span></button>
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button
            text="Read Article"
            onClick={() => window.open(link, "_blank")}
            icon={Web_Icon}
            className="white-button"
          />
        </a>
      </div>
    </div>
  )
}
