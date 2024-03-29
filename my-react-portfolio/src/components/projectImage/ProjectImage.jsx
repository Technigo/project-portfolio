/* eslint-disable react/prop-types */
import "./ProjectImage.css";

export const ProjectImage = ({ projectName, images }) => {
  const imageObject = images.find((img) => img.projectName === projectName);
  const imageUrl = imageObject?.imageUrl || ""; // Fallback for missing image, check?? Where add fallback image??

  return (
    <div className="image-wrapper">
      <img className="project-image" src={imageUrl} alt={projectName} />
    </div>
  );
};
