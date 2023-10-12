import "./Headline.css";

export const Headline = ({ text, level, className }) => {
  const Tag = `h${level}`;

  return (
    <>
      <Tag className={className}>{text}</Tag>
    </>
  );
};
