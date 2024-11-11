import { Grid } from "../ui/Grid/Grid"
import { NameHeader, Subheading } from "../ui/Typography/Typography"
import './HeaderSection.css'

export const HeaderSection = () => {
  return (
    <Grid background="black" >
      <header className="header-content">
        <Subheading>Hi there, I&#39;m</Subheading>
        <NameHeader>Joyce Kuo</NameHeader>
        <Subheading>Creative Frontend Developer with a Background in Music Performance & Education</Subheading>
      </header >
    </Grid >
  )
}
