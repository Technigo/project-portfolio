import { BioCard } from "../../components/BioCard/BioCard"
import { BioImage } from "../../ui/BioImage/BioImage"
import { Grid } from "../../ui/Grid/Grid"
import "./BioSection.css"

export const BioSection = () => {
    return (
        <Grid background="neutral">
            <section className="bio-section">
                <BioCard />
                <BioImage />
            </section>
        </Grid>
    )
}