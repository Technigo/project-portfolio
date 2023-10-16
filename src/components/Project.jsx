/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Photo } from "../components/Photo";

export const Project = ({ name, photo, tags, id }) => {
  console.log("name", name);
  return (
    <>
      <h2>{name}</h2>
      <Photo source={photo} color="blue" mode="square" />
      {tags.map((tag) => {
        return (
          <p key={`${id} ${tag}`} className="tag">
            {tag}
          </p>
        );
      })}
    </>
  );
};
