import styles from "../styling/skill.module.css";
import arrow from "/images/arrow.png";
import { useTranslation } from "react-i18next";
export const Skill = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.skills_container} aria-label="Skills Container">
      <img src={arrow} alt="arrow picture" className={styles.animated_arrow} />
      <h1>{t("skills.0")}</h1>
      <div className={styles.skill_code}>
        <h3>{t("skills.1")}</h3>
        <ul className={styles.skills_list}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express.js</li>
          <li>Restful API </li>
          <li>Python</li>
          <li>C#</li>
        </ul>
      </div>
      <div className={styles.skill_tool}>
        <h3>{t("skills.2")}</h3>
        <ul className={styles.skills_list}>
          <li>Slack</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Postman</li>
          <li>Canva</li>
          <li>Adobe Photoshop</li>
          <li>Keynote</li>
          <li>Trello</li>
          <li>Cloudinary</li>
        </ul>
      </div>
      <div className={styles.skill_more}>
        <h3>{t("skills.3")}</h3>
        <ul className={styles.skills_list}>
          <li>Mob/Pair Programming</li>
          <li>Agile Methodology</li>
          <li>Database Management</li>
          <li>Faciltation</li>
          <li>Porblem Solving</li>
          <li>Version Control</li>
          <li>Soft Skills</li>
        </ul>
      </div>
      <div className={styles.skill_upcoming}>
        <h3>{t("skills.4")}</h3>
        <ul className={styles.skills_list}>
          <li>.Net</li>
          <li>Three.js</li>
          <li>UX/UI</li>
          <li>Typescript</li>
          <li>Next.js</li>
        </ul>
      </div>
    </div>
  );
};
