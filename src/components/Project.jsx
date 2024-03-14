import github from "/icons/github-button.png";
import liveDemo from "/icons/LiveDemo.png";
import styles from "../styling/projects.module.css";
import data from "../translations/en.json";
import { useTranslation } from "react-i18next";
const projectLists = data.projects.project;

export const Project = () => {
  const { t } = useTranslation();

  const projectList = t("projects.project", { returnObjects: true });

  return (
    <div className={styles.project_wrapper}>
      {projectList.map((project) => (
        <figure className={styles.project_frame} key={project.id}>
          <figcaption>
            <div className={styles.project}>
              <img
                src={project.image}
                alt={project.project_title}
                className={styles.project_image}
              />
              <div className={styles.project_text_wrapper}>
                <h1 className={styles.project_title}>
                  {t(project.project_title)}
                </h1>
                <p className={styles.project_content}>{t(project.content)}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className={styles.button_wrapper}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to the github image"
                  >
                    <button type="button">
                      <img src={github} alt="github image" />
                      <span>{t(project.button[0])}</span>
                    </button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button">
                      <img src={liveDemo} alt="Live Demo Image" />
                      <span>{t(project.button[1])}</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
