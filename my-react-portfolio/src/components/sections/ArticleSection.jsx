import { Card } from "../components/Card/Card"
import { Grid } from "../ui/Grid/Grid"
import { SectionTitle } from "../ui/Typography/Typography"

export const ArticleSection = () => {
  return (
    <Grid background="pink">
      <SectionTitle>My articles</SectionTitle>
      <Card />
    </Grid>
  )
}