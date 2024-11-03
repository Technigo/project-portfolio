import { Grid } from "../ui/Grid"
import { Card } from "../components/Card"
import SectionTitle from '../../ui/SectionTitle';

export const ProjectSection = () => {
    return (
<Grid background="white">
<SectionTitle color="#0041ff">Featured Projects </SectionTitle>
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