import { ReadMoreButton } from "../ButtonComponents/ReadMoreButton";
import "./Articles.css";

export const Articles = ({
  imageURL,
  title,
  date,
  articleText,
  link,
  headlineId,
}) => {
  return (
    <div className="article-card">
      <img src={imageURL} className="post-image" />
      <span className="date">{date}</span>
      <div className="article-text">
        <h2>{title}</h2>
        <p>{articleText}</p>
        <ReadMoreButton headlineId={headlineId} link={link} />
      </div>
    </div>
  );
};
