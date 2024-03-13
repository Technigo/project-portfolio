/* eslint-disable react/prop-types */
import { Images } from "./Images";
import { Tags } from "./Tags";
import { Buttons } from "./Buttons";

import "./Project.css";

export const Project = ({ name, description, tags, homepage, url, sectionId }) => {
  return (
    <div className="project-card">
      <Images projectName={name}/>
      <div className="project-description">
        <h2>{name[0].toUpperCase()+name.replaceAll("-", " ").slice(1)}</h2>
        <p>{description}</p>
        <Tags tags={tags} />
        <Buttons homepage={homepage} url={url} sectionId={sectionId} />
      </div>      
    </div>
  );
};
