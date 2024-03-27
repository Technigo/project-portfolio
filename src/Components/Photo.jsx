/* eslint-disable react/prop-types */

const Photo = ({ source, color, size }) => {
  return <img src={source} className={`photo ${color} ${size}`} />;
};

export default Photo;
