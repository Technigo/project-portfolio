import { Photo } from "./Photo";
import { Tag } from "./Tag";
import { Button } from "./Button";
import "./Card.css";

export const Card = ({
  title,
  image,
  description,
  tags,
  netlifyUrl,
  githubUrl,
}) => {
  return (
    <div className="card-box">
      <Photo source={image} color="blue" size="small" />
      <div className="project-info-wrapper">
        <div className="description-and-tags">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="tech-tags">
            {tags.map((tag) => {
              return <Tag tagName={tag} key={tag}/>
            })}
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            className="live-demo"
            label="Live demo"
            icon="fa-solid fa-globe"
            url={netlifyUrl}
          />
          <Button
            className="view-the-code"
            label="View the code"
            icon="fab fa-github"
            url={githubUrl}
          />
        </div>
      </div>
    </div>
  );
};
