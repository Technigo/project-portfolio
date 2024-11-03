import { Grid } from "../ui/Grid"
import { SectionTitle } from "../ui/Typography"
import { Card } from "../components/Card"

export const ProjectSection = () => {
    return (
<Grid background="white">
    <SectionTitle> My projects</SectionTitle>
    <Card
    // imageSource={}
    borderColor="blue"
    cardTitle="This is project version on the card"
    cardDescription="This is project description"
    sectionType="project"
    
    />

<Card
    // imageSource={}
    borderColor="blue"
    cardTitle="This is project version on the card"
    cardDescription="This is project description"
    sectionType="project"
    
    
    />
</Grid>
    )
}