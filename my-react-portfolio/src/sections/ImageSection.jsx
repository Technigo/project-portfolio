import { Grid } from "../ui/Grid/Grid"
import data from '../../../projects.json'
import './ImageSection.css'

export const ImageSection = () => {
  // Select the first 3 projects for display
  const displayProjects = data.projects.slice(0, 3)

  return (

    <div className="full-width-background">
      <Grid background="black">
        <section className="image-section">
          <div className="image-card left-image">
            <img src={displayProjects[1].image} alt={displayProjects[1].name} />
          </div>
          <div className="image-card center-image">
            <img src={displayProjects[0].image} alt={displayProjects[0].name} />
          </div>
          <div className="image-card right-image">
            <img src={displayProjects[2].image} alt={displayProjects[2].name} />
          </div>
        </section>
      </Grid>
    </div>
  )
}
