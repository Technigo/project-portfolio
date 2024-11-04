/* eslint-disable react/prop-types */
// Tags.jsx
import "./Tags.css";

export const Tag = ({ sectionType, text }) => {
  return (
    <p className={`${sectionType}-tag`}>{text}</p>
  );
};
