import "./Photo.css";

export const Photo = ({ source, color, size }) => {
  return (
    <div className="photo-wrapper">
      <img src={source} className={`${color} ${size}`} alt="photo" />
    </div>
  );
};
