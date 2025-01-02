import { Grid } from "../ui/Grid"
import { Card } from "../components/Card"



export const ProjectSection = () => {
    return (
<Grid background="white">
<h2 color="#0041ff">Featured Projects </h2>
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