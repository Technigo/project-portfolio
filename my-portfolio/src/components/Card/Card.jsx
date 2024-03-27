import { Button } from "../Button/Button";
import { Photo } from "../Photo/Photo";

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
  const renderTags = [tags];

  return (
    <section className={`article-container ${direction}`}>
      <Photo color={color} mode={mode} source={source} />
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="tags">
        {renderTags.map((tag, index) => (
          <p className="tag" key={index}>
            {tag}
          </p>
        ))}
      </div>
      <div className="buttons">
        <Button source={netlify} image="globe" text="See it live" />
        <Button source={github} image="github" text="View the code" />
      </div>
    </section>
  );
};
