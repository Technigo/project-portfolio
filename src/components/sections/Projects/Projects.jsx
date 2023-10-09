import { Button } from "../../ui/Button";
import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { primaryColorText } from "../../../styles/styleVariable";
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

function ProjectCard({ project }) {
  const { imagePath, title, skills, gitUrl, demoUrl, text } = project;
  return (
    <div className={styles.project_card}>
      <ImageFrame imagePath={imagePath} borderColor="blue" />
      <div className={styles.text_box}>
        <Title text={title} />
        <p className={styles.text}>{text}</p>
        <div className={styles.labels}>
          {skills.map((skill) => (
            <Label labelText={skill} key={skill} />
          ))}
        </div>
        <div className={styles.btn_box}>
          <Button text="Live demo" iconPath="/icons/live-demo.png" url={demoUrl} />{" "}
          <Button text="View the code" iconPath="/icons/github.png" url={gitUrl} />
        </div>
      </div>
    </div>
  );
}
