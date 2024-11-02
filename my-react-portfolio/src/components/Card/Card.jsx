import './card.css';
import '../../ui/Typography/Typography'
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

export const Card = ({ image, title, description, tags, netlifyLink, githubLink }) => {
  return (
    <article className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-tags">{tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
      </div>
      <header>
        <h3 className="card-title">{title}</h3>
      </header>
      <section className="card-description">
        <p>{description}</p>
      </section>
      <footer className="card-footer">
        <Button link={netlifyLink} text="Live demo" />
        <Button link={githubLink} text="View code" />
      </footer>
    </article>
  );
};