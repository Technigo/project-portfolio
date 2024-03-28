import "./common.css";

export const Paragraph = ({ text, className }) => {
  return <p className={`custom-paragraph ${className}`}>{text}</p>; // Apply the custom class
};
