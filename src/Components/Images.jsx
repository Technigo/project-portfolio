import repoImages from "../image-collection.json";

export const Images = (projectName) => {
  const repoImage = repoImages.find((img) => img.projectName === projectName);
  
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
