/* eslint-disable react/prop-types */
import "./SingleProject.css";

export const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((topic) => (
        <p className="tag" key={topic}>
          {topic.toUpperCase()}
        </p>
      ))}
    </>
  );
};
