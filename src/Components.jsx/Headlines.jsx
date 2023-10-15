import "./Headline.css";

//Headline settings//
export const Headline = ({ text, level }) => {
  const Tag = `h${level}`;

  return <Tag>{text}</Tag>;
};
