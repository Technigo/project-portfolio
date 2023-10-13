/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Photo } from "../components/Photo";

export const Project = ({ name, photo, tags }) => {
  console.log("name", name);
  return (
    <>
      <h2>{name}</h2>
      <Photo source={photo} color="blue" mode="square" />
      {tags.map((tag) => {
        return <p className="tag">{tag}</p>;
      })}
    </>
  );
};
