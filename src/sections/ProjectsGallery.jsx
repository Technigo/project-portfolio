import "./ProjectsGallery.css";


export const ProjectsGallery = () => {
  return (
    <section className="projects-gallery">
      <div className="gallery">
        <img src="/Thoughts.png" alt="gallery-image-thoughts" className="image left" />
        <img src="/Weather.png" alt="gallery-image-weather" className="image middle" />
        <img src="/Business.png" alt="gallery-image-business" className="image right" />
      </div>
    </section>
  );
};
