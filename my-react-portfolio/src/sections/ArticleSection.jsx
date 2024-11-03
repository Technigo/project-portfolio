
import { Grid } from "../ui/Grid"
import { Card } from "../components/Card"
import { SectionTitle } from "../ui/Typography"

export const ArticleSection = () => {
    return (
<Grid background="pink">
    <SectionTitle> My articles </SectionTitle>
    <Card
    // imageSource={}
    borderColor="pink"
    cardTitle="This is article version on the card"
    cardDescription="This is article description"
    sectionType="article"
    
    
    />
</Grid>
    )
}