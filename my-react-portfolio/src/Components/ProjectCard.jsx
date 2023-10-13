/* eslint-disable react/prop-types */
import Photo from "./Photo";
import ButtonLink from "./ButtonLink";
import "/src/Components/projectCard.css";

export const Projectcard = ({ name, photo, tags, liveLink, githubLink }) => {
  return (
    <>
      <h2>{name}</h2>
      <Photo source={photo} color="blue" mode="square" />
      {tags.map((tag) => {
        return (
          <p key={tag} className="tag">
            {tag}
          </p>
        );
      })}
      <ButtonLink
        style="btn-live"
        icon="/src/assets/Btn-liveDemo.svg"
        name="Live demo"
        link={liveLink}
      />
      <ButtonLink
        style="btn-github"
        icon="/src/assets/Btn-github.svg"
        name="View the code"
        link={githubLink}
      />
    </>
  );
};

export default Projectcard;
