import { BioCard } from "../components/BioCard/BioCard"
import { BioImage } from "../ui/BioImage/BioImage"
import { Grid } from "../ui/Grid/Grid"
import "../ui/Grid/Grid.css"

export const BioSection = () => {
    return (
        <Grid background="neutral">
            <BioCard />
            <BioImage />
        </Grid>
    )
}