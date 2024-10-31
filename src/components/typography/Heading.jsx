import "./Typography.css";

export const Heading = ({ level = 1, text, className = "" }) => {
  const Tag = `h${level}`;
  return <Tag className={className}>{text}</Tag>;
};
