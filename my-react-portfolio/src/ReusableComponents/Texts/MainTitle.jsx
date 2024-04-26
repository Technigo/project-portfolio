import "./text.css";

// eslint-disable-next-line react/prop-types
const MainTitle = ({ className, text }) => {
  return <h2 className={className}>{text}</h2>;
};

export default MainTitle;
