import "./Tag.css";

export const Tag = ({ tagName }) => {
  return (
    <div className="tag-wrapper">
      <p>{tagName}</p>
    </div>
  );
};
