import "./progressBar.css";

// eslint-disable-next-line react/prop-types
export const ProgressBar = ({ progress }) => {
  return <div className="progressBar" style={{ width: `${progress}%` }}></div>;
};
