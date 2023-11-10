import "./Photo.css";

export const Photo = ({ source, alt, className }) => {
  return (
    <div className="project-photo">
      <img src={source} alt={alt} className={className} />
    </div>
  );
};
