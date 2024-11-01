/* eslint-disable react/prop-types */
import "./Heading.css";

export const Heading = ({ level, text, className, id }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={className}>
      <span id={id}>{text}</span>
    </HeadingTag>
  );
};
