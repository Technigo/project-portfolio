import { Button } from "../../ui/Button";
import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import { primaryColorText } from "../../../styles/styleVariable";
import styles from "./Projects.module.scss";
export default function Projects() {
  return (
    <section className={styles.projects_section}>
      <Heading color={primaryColorText}>Featured Projects</Heading>
      <div className={styles.projects_section_cards}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className={styles.project_card}>
      <ImageFrame imagePath="/images/berlin.png" borderColor="blue" />
      <div className={styles.text_box}>
        <Title text="Chatbot built in JavaScript" />
        <p className={styles.text}>
          The chat bot app is a conversational AI-powered tool designed to enhance user experience
          by providing instant, personalized, and automated responses to user inquiries.
        </p>
        <div className={styles.labels}>
          <Label labelText="HTML" />
          <Label labelText="React" />
        </div>
        <div className={styles.btn_box}>
          <Button text="Live demo" iconPath="/icons/github.png" url="#" />{" "}
          <Button text="View the code" iconPath="/icons/github.png" url="#" />
        </div>
      </div>
    </div>
  );
}
