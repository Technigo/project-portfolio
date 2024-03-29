/* eslint-disable react/prop-types */
import "./SingleProject.css";
import { Tags } from "../tags/Tags";
import images from "./images.json";
import { ProjectImage } from "../projectImage/ProjectImage";
import { Button } from "../button/Button";

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
              {/* Pass props */}
              <ProjectImage projectName={dataset.name} images={images} />{" "}
              <h2>{dataset.name}</h2>
              <p>{dataset.description}</p>
              {/* <p>{dataset.topics}</p> */}
              <Tags tags={dataset.topics} />
              <Button
                label="Live demo"
                buttonType="liveDemo"
                onClick={() => window.open(dataset.homepage)}
              />
              <Button
                label="View the code"
                buttonType="github"
                onClick={() => window.open(dataset.html_url)}
              />
            </div>
          )
      )}
    </>
  );
};
