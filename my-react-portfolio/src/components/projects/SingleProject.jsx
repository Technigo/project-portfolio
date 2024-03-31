/* eslint-disable react/prop-types */
import "./SingleProject.css";
import { Tags } from "./Tags";
import images from "./images.json";
import { ProjectImage } from "./ProjectImage";
import { Button } from "./Button";
import { Heading } from "../heading/Heading";

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
              <ProjectImage projectName={dataset.name} images={images} />
              <Heading className="project-name" level={3} text={dataset.name} />
              <p className="project-description">{dataset.description}</p>
              <Tags tags={dataset.topics} />
              <div className="demo-button">
                <Button
                  label="Live demo"
                  buttonType="liveDemo"
                  onClick={() => window.open(dataset.homepage)}
                />
              </div>
              <div className="git-button">
                <Button
                  label="View the code"
                  buttonType="github"
                  onClick={() => window.open(dataset.html_url)}
                />
              </div>
            </div>
          )
      )}
    </>
  );
};
