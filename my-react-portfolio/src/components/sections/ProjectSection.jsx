import { ProjectInfo } from "../Projects.jsx";
import { Grid } from "../ui/Grid.jsx";

export const ProjectSection = () => {
  return (
    <Grid background="white">
      <h2>My projects</h2>
      <ProjectInfo />
    </Grid>
  )
}