/* eslint-disable react/prop-types */
import "./projects.css";

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
              <div className="image-wrapper">Bild</div>
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
