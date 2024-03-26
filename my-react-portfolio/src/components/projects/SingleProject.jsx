/* eslint-disable react/prop-types */

//access data from Projects.jsx via props
export const SingleProject = ({ projects }) => {
  return (
    <div>
      {projects.map(
        (dataset) =>
          //only render projects that contain homepage, and exclude gihub in homepage so that Github profile repo is not showing
          dataset.homepage &&
          !dataset.homepage.includes("github") && (
            <div key={dataset.id}>
              <h2>{dataset.name}</h2>
              <p>{dataset.description}</p>
              <p>{dataset.topics}</p>
              <button>{dataset.homepage}</button>
              <button>{dataset.html_url}</button>
            </div>
          )
      )}
    </div>
  );
};
