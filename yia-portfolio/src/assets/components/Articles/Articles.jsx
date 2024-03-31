import { Buttons } from "../ButtonComponents/Buttons";

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
      <h2>{title}</h2>
      <p>{articleText}</p>
      <Buttons headlineId={headlineId} link={link} />
    </div>
  );
};
