import "./IntroHeading.css";

export const MainHeading = ({ className, text }) => {
  return <h1 className={`${className}`}>{text}</h1>;
};
