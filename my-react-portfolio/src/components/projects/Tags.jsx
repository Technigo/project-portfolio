/* eslint-disable react/prop-types */
import "./SingleProject.css";

export const Tags = ({ tags }) => {
  return (
    <div className="tag-wrapper">
      {tags.map((topic) => (
        <p className="tag" key={topic}>
          {topic.toUpperCase()}
        </p>
      ))}
    </div>
  );
};
