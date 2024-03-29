/* eslint-disable react/prop-types */
import "./Heading.css";

export const Heading = ({ level, text, className, id }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={className} id={id}>
      {text}
    </HeadingTag>
  );
};
