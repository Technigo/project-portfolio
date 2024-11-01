/* eslint-disable react/prop-types */
import "./SingleProject.css";
import { Tags } from "./Tags";
import images from "./images.json";
import { ProjectImage } from "./ProjectImage";
import { Heading } from "../heading/Heading";
import { Demo, Git } from "./Button";

//access data from Projects.jsx via props
export const SingleProject = ({ projects }) => {
  return (
    <>
      {projects.map(
        (dataset) =>
          //only render projects that contain homepage and exclude gihub in homepage so that Github profile repo is not showing
          dataset.homepage &&
          !dataset.homepage.includes("github") && (
            <div className="singleproject-card" key={dataset.id}>
              {/* Pass props */}
              <div className="image-container">
                <ProjectImage projectName={dataset.name} images={images} />
              </div>
              <div className="description-container">
                <div className="description-wrapper">
                  <Heading
                    className="description-heading"
                    level={3}
                    text={dataset.name}
                  />
                  <p>{dataset.description} </p>
                </div>
                <div className="tags-wrapper">
                  <Tags tags={dataset.topics} />
                </div>
                <div className="button-wrapper">
                  <button className="demo-button">
                    <a href={dataset.homepage}>
                      <Demo alt="github-icon" id="livedemo" />
                      Live Demo
                    </a>
                  </button>
                  <button className="git-button">
                    <a href={dataset.html_url}>
                      <Git alt="github-icon" id="github" />
                      View the Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};
