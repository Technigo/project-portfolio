import { Button } from "../../ui/Button";
import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { ObserverWrapper } from "../../ui/ObserverWrapper";

import { primaryColorText, secondaryColorText } from "../../../styles/styleVariable";
import { projectsData as data } from "../../../statics/projectsData";

import styles from "./Projects.module.scss";

export default function Projects({ lang }) {
  return (
    <section className={styles.projects_section}>
      <ObserverWrapper>
        <div className={styles.projects_inner}>
          <Heading color={primaryColorText}>Featured Projects</Heading>
          <div className={styles.projects_section_cards}>
            {data.map((project) => (
              <ProjectCard project={project} key={project.title} lang={lang} />
            ))}
          </div>
        </div>
      </ObserverWrapper>
    </section>
  );
}

// mapping this card with each project data from projectData array
function ProjectCard({ project, lang }) {
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
        <p className={styles.text} lang={lang}>
          {text[lang]}
        </p>
        <div className={styles.labels}>
          {skills.map((skill) => (
            <Label labelText={skill} key={skill} />
          ))}
        </div>
        <div className={styles.btn_box}>
          <Button
            iconPath="/icons/live-demo.svg"
            url={demoUrl}
            hoverColor={primaryColorText.color}
            altText="live-demo icon image"
          >
            Live demo
          </Button>
          <Button
            iconPath="/icons/git-large.svg"
            altText="github icon image"
            url={gitUrl}
            hoverColor={secondaryColorText.color}
          >
            View the code
          </Button>
        </div>
      </div>
    </div>
  );
}
