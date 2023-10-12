import "./Photo.css";

export const Photo = ({ source, alt }) => {
  return (
    <div className="project-photo">
      <img src={source} alt={alt} />
    </div>
  );
};
