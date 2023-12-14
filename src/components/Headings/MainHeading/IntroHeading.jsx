import "./IntroHeading.css";

export const IntroHeading = ({ className, text }) => {
  return <h1 className={`${className}`}>{text}</h1>;
};
