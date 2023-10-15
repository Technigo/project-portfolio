import { Photo } from "./Photo";
import { ArticlesLinks } from "./LinkArticle";
import "./ArticleCard.css";

export const ArticleCard = ({ name, photo, tags, text }) => {
  return (
    <div className="article-card">
      <Photo
        source={photo}
        color="blue"
        mode="square"
        className="article-photo"
      />
      <div className="tags">
        {tags.map((tag) => (
          <p key={tag.id} className="tag">
            {tag.name}
          </p>
        ))}
      </div>
      <h2>{name}</h2>
      <p className="project-text">{text}</p>
      <ArticlesLinks />
    </div>
  );
};
