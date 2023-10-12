import "./MainHeading.css";

export const MainHeading = ({ className, text }) => {
  return <h2 className={`${className}`}>{text}</h2>;
};
