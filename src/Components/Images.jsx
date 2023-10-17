import repoImages from "../image-collection.json";

import "./Images.css";

export const Images = ({ projectName }) => {
  const repoImage = repoImages.find((img) => img.projectName === projectName);
  console.log(repoImages);
  console.log(repoImage);
  return (
    <div className="project-image">
      <ul>
        <li>
            <img src={repoImage?.imageUrl} alt={projectName} />
        </li>
      </ul>
    </div>
  );
};
