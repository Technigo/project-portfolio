import projectImagesData from "./images.json";

export const ProjectImages = ({ projectName }) => {
  const projectImage = projectImagesData.find(
    (img) => img.projectName === projectName
  );

  return (
    <div className="project-image">
      <ul>
        <li>
          <img src={projectImage?.imageUrl} alt={projectName} />
        </li>
      </ul>
    </div>
  );
};
