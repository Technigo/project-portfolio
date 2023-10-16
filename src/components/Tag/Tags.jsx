import "./tags.css";

export const Tags = ({ tags }) => {
  return (
    <div className="tag">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};
