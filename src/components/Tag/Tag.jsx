import "./Tag.css";

export const Tag = ({ text, variant, className }) => {
  const classNames = `tag ${variant || ""} ${className || ""}`.trim();

  return <span className={classNames}>{text}</span>;
};
