import "./SubHeading.css";

export const SubHeading = ({ className, text }) => {
  return <h3 className={`${className}`}>{text}</h3>;
};
