import { BioCard } from "../components/BioCard/BioCard"
import { Grid } from "../ui/Grid/Grid"
import "../ui/Grid/Grid.css"

export const BioSection = () => {
    return (
        <Grid background="neutral">
            <BioCard />
        </Grid>
    )
}