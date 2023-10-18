/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Photo } from "../components/Photo";

export const Project = ({ name, photo, tags, id }) => {
  console.log("name", name);
  return (
    <>
      <Photo source={photo} color="blue" mode="square" />
      <h2>{name}</h2>
      <p>
        The chat bot app is a conversational AI-powered tool designed to enhance
        user experience by providing instant, personalized, and automated
        responses to user inquiries.
      </p>
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
