import styles from "./Skills.module.scss";
import { whiteColorText, secondaryColorText } from "../../../styles/styleVariable";
import { Heading } from "../../ui/Heading";
export default function Skills() {
  return (
    <section className={styles.skills_section}>
      <div className={styles.skills_inner}>
        <Heading color={whiteColorText} alignStart="center">
          Skills
        </Heading>
        <div className={styles.skills_card_wrapper}>
          <SkillCard /> <SkillCard /> <SkillCard /> <SkillCard />
        </div>
      </div>
    </section>
  );
}

function SkillCard() {
  return (
    <div className={styles.skill_card}>
      <Tag background="red">Code</Tag>
      <ul className={styles.skills_ul}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  );
}

function Tag({ children, background }) {
  return (
    <div className={styles.tag_wrapper} style={{ backgroundColor: background }}>
      {children}
    </div>
  );
}
