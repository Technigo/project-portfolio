/* eslint-disable react/prop-types */
import Photo from "./Photo";
import Button from "./Button";
import "/src/Components/projectCard.css";

export const Projectcard = ({
  name,
  photo,
  tags,
  liveLink,
  description,
  githubLink,
}) => {
  return (
    <div className="container">
      <Photo source={photo} color="blue" mode="square" />

      <div className="project-content">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="tag-container">
          {tags.map((tag) => {
            return (
              <p key={tag} className="tag">
                {tag}
              </p>
            );
          })}
        </div>
        <div className="btn-container">
          <Button
            style="btn-live"
            icon="/src/assets/Btn-liveDemo.svg"
            name="Live demo"
            link={liveLink}
          />
          <Button
            style="btn-github"
            icon="/src/assets/Btn-github.svg"
            name="View the code"
            link={githubLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
