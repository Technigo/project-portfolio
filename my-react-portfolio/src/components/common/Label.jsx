import "./common.css";

export const Label = ({ tagText }) => {
  return (
    <div className={"tag-container"}>
      <p className="tag-text">{tagText}</p>
    </div>
  );
};
