import "./Headline.css";

// eslint-disable-next-line react/prop-types
export const Headline = ({ text, level }) => {
  const Tag = `h${level}`;

  return <Tag>{text}</Tag>;
};

//COMMENT