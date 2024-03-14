import styles from "../styling/projects.module.css";
import { Project } from "../components/Project";
import cat from "/images/flyingcat.png";
import { useTranslation } from "react-i18next";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.projects_container}>
      <img
        src={cat}
        className={styles.flyingcat}
        alt="flyingcat image"
        aria-hidden="true"
      ></img>

      <h1 className={styles.title}>{t("projects.title")}</h1>

      <Project />
    </div>
  );
};
