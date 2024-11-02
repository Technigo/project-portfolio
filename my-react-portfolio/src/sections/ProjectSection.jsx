import { Grid } from '../ui/Grid/Grid'
import { SectionTitle } from '../ui/Typography/Typography'
import { Card } from '../components/Card/Card'
import { ArrowButton } from '../components/ArrowButton/ArrowButton'
import data from '../../../projects.json'
import './ProjectSection.css'

export const ProjectSection = () => {
  const projects = data.projects

  return (
    <Grid background="white">
      <section className="project-section">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="project-cards">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.name}
              description={project.description}
              tags={project.tags}
              netlifyLink={project.netlify}
              githubLink={project.github}
              reverse={index % 2 !== 0} // Reverse for odd index cards
            />
          ))}
        </div>
        <ArrowButton />
      </section>
    </Grid>
  )
}