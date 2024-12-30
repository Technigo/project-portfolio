import { Articles } from "../Articles.jsx";
import { Grid } from "../ui/Grid.jsx";

import "../ui/Grid.css"


export const ArticleSection = () => {
  return (
    <Grid background="black">
      <h2>My Articles</h2>
      <Articles />
    </Grid>
  )
}