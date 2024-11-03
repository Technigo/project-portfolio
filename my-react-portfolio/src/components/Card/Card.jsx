import webIcon from '../../assets/web-icon.svg'
import githubIcon from '../../assets/github-icon.svg'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import '../../ui/Typography/Typography'
import './Card.css';

export const Card = ({ image, title, description, tags, netlifyLink, githubLink, reverse }) => {
  return (
    <article className={`card ${reverse ? 'reverse' : ''}`}>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <div className="card-tags">{tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
        </div>
        <header>
          <h3 className="card-title">{title}</h3>
        </header>
        <p className="card-description">
          {description}</p>
        <footer className="card-buttons">
          <Button link={netlifyLink} text="Live demo" icon={webIcon} variant="white-on-black" aria-label={`View live demo for ${title}`} />
          <Button link={githubLink} text="View code" icon={githubIcon} variant="white-on-black" aria-label={`View code for ${title}`} />
        </footer>
      </div>
    </article>
  )
}
