import "./Headline.css";

export const Headline = ({ text, level }) => {
  const Tag = `h${level}`;

  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};
