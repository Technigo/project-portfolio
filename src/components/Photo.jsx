/* eslint-disable react/prop-types */
import "./Photo.css";

export const Photo = ({ mode, color, source }) => {
  return (
    <img src={source} className={`photo ${color} ${mode}`} alt="description" />
  );
};
