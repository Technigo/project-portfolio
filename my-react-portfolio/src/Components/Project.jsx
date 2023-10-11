/* eslint-disable react/prop-types */
import { Buttons } from "./Buttons";

export const Project = ({ name, description, tags, homepage, url }) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tags">{tags}</div>
      <Buttons homepage={homepage} url={url}/>
    </div>
  )
}
