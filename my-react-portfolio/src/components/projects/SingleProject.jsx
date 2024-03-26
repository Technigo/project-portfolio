/* eslint-disable react/prop-types */
import "./projects.css";

import images from "./images.json";
import { ProjectImage } from "./ProjectImage";

//access data from Projects.jsx via props
export const SingleProject = ({ projects }) => {
  return (
    <>
      {projects.map(
        (dataset) =>
          //only render projects that contain homepage and exclude gihub in homepage so that Github profile repo is not showing
          dataset.homepage &&
          !dataset.homepage.includes("github") && (
            <div className="flex singleproject-card" key={dataset.id}>
              <ProjectImage projectName={dataset.name} images={images} />{" "}
              {/* Pass props */}
              {/* <div className="image-wrapper">
                <img
                  src={
                    images.find((img) => img.projectName === dataset.name)
                      ?.imageUrl || "" // Fallback for missing image?? define this in json file??
                  }
                  alt={dataset.name} 
                />
              </div> */}
              <h2>{dataset.name}</h2>
              <p>{dataset.description}</p>
              <p>{dataset.topics}</p>
              <button>{dataset.homepage}</button>
              <button>{dataset.html_url}</button>
            </div>
          )
      )}
    </>
  );
};

// Function to get image URL based on project name from images.json
// const getImage = (projectName) => {
//   const image = images.find((img) => img.projectName === projectName);
//   return image ? `/images/${image.imageUrl}` : "";
// };
