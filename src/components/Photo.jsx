/* eslint-disable react/prop-types */
import "./Photo.css";

export const Photo = ({ mode, color, source }) => {
  console.log(source);
  return <img src={source} className={`photo ${color} ${mode}`} />;
};
