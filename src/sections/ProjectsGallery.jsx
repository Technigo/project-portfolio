import Rectangle16 from '../assets/Rectangle16.svg'
import Rectangle17 from '../assets/Rectangle17.svg'
import Rectangle18 from '../assets/Rectangle18.svg'
import "./ProjectsGallery.css"

export const ProjectsGallery = () => {

  const projects = [
    { id: 1, image: Rectangle18 },
    { id: 2, image: Rectangle16 },
    { id: 3, image: Rectangle17 },
  ];

  return (
    <section className="projects-gallery">
      <div className="gallery">
        {projects.map((project) => (
          <div key={project.id} className="gallery-card">
            <img src={project.image} alt={`Project ${project.id}`} className={`gallery-image ${project.className}`} />
          </div>
        ))}
      </div>
    </section>
  );
};