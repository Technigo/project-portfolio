import "./Heading1.css";

export const Heading1 = ({ className, text }) => {
  return <h1 className={`${className}`}>{text}</h1>;
};
