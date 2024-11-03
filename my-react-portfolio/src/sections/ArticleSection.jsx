import { Grid } from "../ui/Grid";
import { Card } from "../components/Card";


export const ArticleSection = () => {
    return (
        <Grid background="pink">
            <h2 color="#ff1493"> My articles </h2>
            <Card
                // imageSource={}  // Uncomment and provide a source if needed
                borderColor="pink"
                cardTitle="This is article version on the card"
                cardDescription="This is article description"
                sectionType="article"
            />
        </Grid>
    );
};
