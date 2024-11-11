import webIcon from '../../assets/web-icon.svg'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import './ArticleCard.css'

export const ArticleCard = ({ image, title, date, description, link }) => {
  return (
    <article className="article-card">
      <div className="article-card-image-container">
        <img src={image} alt={`Image for ${title}`} className="article-card-image" />
      </div>
      <div className="article-card-content">
        <div className="article-card-info">
          <Tag text={date} variant="white-border" className="article-tag" />
          <header>
            <h3 className="article-card-title">{title}</h3>
          </header>
          <p className="article-card-description">
            {description}</p>
        </div>
        <Button link={link} text="Read article" icon={webIcon} variant="black-on-white" aria-label={`Read article titled "${title}"`} />
      </div>
    </article>
  )
}
