/* eslint-disable react/prop-types */
import "/src/Components/photo.css";
const Photo = ({ source, color, size }) => {
  return <img src={source} className={`photo ${color} ${size}`} />;
};

export default Photo;
