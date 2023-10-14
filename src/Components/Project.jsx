/* eslint-disable react/prop-types */
import { Images } from "./Images";
import { Tags } from "./Tags";
import { Buttons } from "./Buttons";

export const Project = ({ name, description, tags, homepage, url }) => {
  return (
    <div className="project-card">
      <Images projectName={name}/>
      <h3>{name[0].toUpperCase()+name.replaceAll("-", " ").slice(1)}</h3>
      <p>{description}</p>
      <Tags tags={tags} />
      <Buttons homepage={homepage} url={url}/>
    </div>
  )
}
