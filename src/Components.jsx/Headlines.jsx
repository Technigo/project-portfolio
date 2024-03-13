import "./Headline.css";

//Headline settings//
export const Headline = ({ text, level }) => {
  const Tag = `H${level}`;

  return <Tag>{text}</Tag>;
};
