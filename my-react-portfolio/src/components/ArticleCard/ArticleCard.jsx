import './ArticleCard.css'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
// import webIcon from '../../assets/web-icon.svg'

export const ArticleCard = ({ image, title, date, description, link }) => {
  return (
    <article className="article-card">
      <div className="article-card-image-container">
        <img src={image} alt={title} className="article-card-image" />
      </div>
      <div className="article-card-info">
        <header>
          <h3 className="card-title">{title}</h3>
        </header>
        <Tag>{date}</Tag>
        <p className="card-description">
          {description}</p>
      </div>
      <Button>{link}</Button>
    </article>
  )
}
