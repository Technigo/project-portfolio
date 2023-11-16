import { Photo } from "./Photo";
import { ArticlesLinks } from "./LinkArticle";
import "./ArticleCard.css";

export const ArticleCard = ({ name, photo, tags, text, links }) => {
  return (
    <div className="article-card">
      <div className="article-photo-box">
        <Photo
          source={photo}
          color="blue"
          mode="square"
          className="article-photo"
        />
      </div>
      <div className="article-info">
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag.id} className="tag">
              {tag.name}
            </p>
          ))}
        </div>
        <h2>{name}</h2>
        <p className="article-text">{text}</p>
        <ArticlesLinks link={links.link} />
      </div>
    </div>
  );
};
