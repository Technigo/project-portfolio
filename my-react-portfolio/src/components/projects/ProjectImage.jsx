/* eslint-disable react/prop-types */

export const ProjectImage = ({ projectName, images }) => {
  const imageObject = images.find((img) => img.projectName === projectName);
  const imageUrl = imageObject?.imageUrl || ""; // Fallback for missing image

  return (
    <div className="image-wrapper">
      <img src={imageUrl} alt={projectName} />
    </div>
  );
};
