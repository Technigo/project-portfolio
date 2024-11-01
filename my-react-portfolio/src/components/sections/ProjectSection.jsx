import { ProjectInfo } from "../Projects.jsx";
import { Grid } from "../ui/Grid.jsx";

import "../ui/Grid.css"


export const ProjectSection = () => {
  return (
    <Grid background="white">
      <h2>My projects</h2>
      <ProjectInfo />
    </Grid>
  )
}