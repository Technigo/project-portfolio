import { Grid } from "../ui/Grid"
import { Card } from "../components/Card"
import SectionTitle from '../../ui/SectionTitle';


export const ArticleSection = () => {
    return (
<Grid background="pink">
<SectionTitle color="#ff1493"> My articles </SectionTitle>
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