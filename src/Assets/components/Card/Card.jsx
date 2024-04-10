import { Button } from "../Button/Button";
import { Photo } from "../Photo/Photo";
import "./Card.css";

export const Card = ({
  color,
  mode,
  source,
  title,
  description,
  direction,
  tags,
  netlify,
  github,
}) => {
  const renderLink = netlify;

  return (
    <div className={`project-card ${direction}`}>
      <div className="project-image">
        <Photo color={color} mode={mode} source={source} />
      </div>
      <div className="project-info">
        <div className="text-box">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="buttons">
          <Button
            className="button"
            source={renderLink}
            image="Globe"
            text="Live demo"
            color="grey"
          />
          <Button
            className="button"
            source={github}
            image="GitHub"
            text="View the code"
            color="grey"
          />
        </div>
      </div>
    </div>
  );
};