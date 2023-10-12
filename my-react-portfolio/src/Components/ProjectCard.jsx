/* eslint-disable react/prop-types */
import Photo from "./Photo";
import "/src/Components/projectcard.css";
export const Projectcard = ({ name, photo, tags }) => {
  return (
    <>
      <h2>{name}</h2>
      <Photo source={photo} color="blue" size="square" />
      {tags.map((tag) => {
        return (
          <p key={tag} className="tag">
            {tag}
          </p>
        );
      })}
    </>
  );
};
