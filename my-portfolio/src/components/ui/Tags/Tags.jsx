/* eslint-disable react/prop-types */
import "./Tags.css";

export const Tag = ({ sectionType, text }) => {
  return (
    <p className={`${sectionType}-tag`}>{text}</p>
  );
};