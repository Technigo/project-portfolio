export const Header = ({ level, text, className }) => {
  const Tag = `h${level}`; // Dynamically determine heading level
  return <Tag className={className}>{text}</Tag>;
};
