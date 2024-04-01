import "./TextElements.css";

export const TagText = ({ tagText }) => {
  return (
    <span className={"tag-background"}>
      <p className="tag-text">{tagText}</p>
    </span>
  );
};
