import { Grid } from '../ui/Grid/Grid';
import { SectionTitle } from '../ui/Typography/Typography';
import { Card } from '../components/Card/Card';
import data from '../../../projects.json';
import './ProjectSection.css';

export const ProjectSection = () => {
  const projects = data.projects;

  return (
    <section className="projects-section">
      <Grid background="white">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="project-cards">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.description}
              tags={project.tags}
              netlifyLink={project.netlify}
              githubLink={project.github}
            />
          ))}
        </div>
      </Grid>
    </section>
  )
}