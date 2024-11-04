import './Img.css';
import projects from '../../../../projects.json';

const Img = () => {
  return (
    <div className="img-wrapper">
      <div className="img-container">
        {projects.projects.slice(0, 3).map((project, index) => (
          <img key={index} src={project.image} alt={project.name} className={`project-image project-image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Img;
