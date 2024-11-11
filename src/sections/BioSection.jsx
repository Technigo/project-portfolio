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
            Joyce is an exceptional developer, with a unique blend of creativity and analytical thinking shaped by her unique experiences in the music industry. She excels at creating user-friendly applications and enjoys tackling complex problems with attention to detail. Known for her strong communication skills and collaborative spirit, Joyce brings a fresh perspective to every project, making her a valuable asset and a standout in the tech industry.
          </BodyText>
        </div>
      </section>
    </Grid>
  )
}
