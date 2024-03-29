import repoImages from "../images.json";

export const Images = ({ projectName }) => {
  const projectImage = repoImages.find(
    (img) => img.projectName === projectName
  );
  console.log(repoImages);
  console.log(projectImage);
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
