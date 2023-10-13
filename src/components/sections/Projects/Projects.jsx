import { Button } from "../../ui/Button";
import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { primaryColorText, secondaryColorText } from "../../../styles/styleVariable";
import { projectsData as data } from "../../../statics/projectsData";

import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={styles.projects_section}>
      <div className={styles.projects_inner}>
        <Heading color={primaryColorText}>Featured Projects</Heading>
        <div className={styles.projects_section_cards}>
          {data.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

// mapping this card with each project data from projectData array
function ProjectCard({ project }) {
  // skills is array, others are string
  const { imagePath, title, skills, gitUrl, demoUrl, text } = project;
  return (
    <div className={styles.project_card}>
      <div className={styles.image_wrapper}>
        <ImageFrame
          imagePath={imagePath}
          borderColor={primaryColorText.color}
          description={`Image of ${title}`}
        />
      </div>
      <div className={styles.text_box}>
        <Title text={title} />
        <p className={styles.text}>{text}</p>
        <div className={styles.labels}>
          {skills.map((skill) => (
            <Label labelText={skill} key={skill} />
          ))}
        </div>
        <div className={styles.btn_box}>
          <Button iconPath="/icons/live-demo.png" url={demoUrl} hoverColor={primaryColorText.color}>
            Live demo
          </Button>
          <Button iconPath="/icons/github.png" url={gitUrl} hoverColor={secondaryColorText.color}>
            View the code
          </Button>
        </div>
      </div>
    </div>
  );
}
