// import "Tag.css";

export const Tag = ({ tagText, className }) => {
  return (
    <span className={`tag-background ${className}`}>
      <p className="tag-text">{tagText}</p>
    </span>
  );
};
