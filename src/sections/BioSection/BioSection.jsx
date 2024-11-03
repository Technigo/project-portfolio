import { BioCard } from "../../components/BioCard/BioCard"
import { BioImage } from "../../ui/BioImage/BioImage"
import { Grid } from "../../ui/Grid/Grid"
import "./BioSection.css"

export const BioSection = () => {
  return (
    <Grid background="neutral">
      <section className="bio-section">
        <div className="bio-header">
          <BioCard />
        </div>
        <div className="bio-body">
          <BioImage />
        </div>
      </section>
    </Grid>
  )
}