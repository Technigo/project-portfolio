/* eslint-disable react/prop-types */
import "./Heading.css";

export const Heading = ({ heading, level = 2, className }) => {
  const Tag = `h${level}`; // Dynamically chooses h2, h3, etc. based on `level`
  return <Tag className={`heading heading${level} ${className}`}>{heading}</Tag>;
};