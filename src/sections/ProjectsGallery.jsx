import "./ProjectsGallery.css";


export const ProjectsGallery = () => {
  return (
    <section className="projects-gallery">
      <div className="gallery">
        <img src="/Thoughts.png" alt="gallery-image-thoughts" className="image left" />
        <img src="/Weather.png" alt="gallery-image-weather" className="image middle" />
        <img src="/Music.png" alt="gallery-image-music" className="image right" />
      </div>
    </section>
  );
};
