import "./Typography.css";

// eslint-disable-next-line react/prop-types
export const Tag = ({ tagText }) => {
  return (
    <span role="tag" className={"tag-background"}>
      <p className="tag-text">{tagText}</p>
    </span>
  );
};
