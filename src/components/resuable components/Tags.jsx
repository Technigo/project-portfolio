import "./Tags.css";

export const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <p key={index} className="tags">
          {tag}
        </p>
      ))}
    </div>
  );
};
