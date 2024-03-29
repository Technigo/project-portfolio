import "./common.css";

export const Label = ({ tagText }) => {
  return (
    <span role="tag" className={"tag-background"}>
      <p className="tag-text">{tagText}</p>
    </span>
  );
};
