import { Grid } from "../ui/Grid/Grid"
import { BodyText, SectionTitle } from "../ui/Typography/Typography"
import './BioSection.css'

export const BioSection = () => {
  return (
    <Grid background="black">
      <section className="bio-section">
        <div className="bio-container">
          <SectionTitle>Bio</SectionTitle>
          <BodyText>
            Joyce is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.
          </BodyText>
        </div>
      </section>
    </Grid>
  )
}
