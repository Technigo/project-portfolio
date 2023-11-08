/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Photo } from "../components/Photo";

export const Project = ({ name, photo, tags, id, description }) => {
  console.log("name", name);
  return (
    <>
      <Photo source={photo} color="blue" mode="square" />
      <h2>{name}</h2>
      <p>{description}</p>
      {tags.map((tag) => {
        return (
          <p key={`${id} ${tag}`} className="tag">
            <span className="w3-tag">{tag}</span>
          </p>
        );
      })}
    </>
  );
};
