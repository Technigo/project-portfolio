import { Button } from "../../ui/Button";
import { Heading } from "../../ui/Heading";
import { ImageFrame } from "../../ui/ImageFrame";
import { Label } from "../../ui/Label";
import { Title } from "../../ui/Title";
import styles from "./Projects.module.scss";
export default function Projects() {
  return (
    <div>
      <Heading headingText="Frontend Developer" color="#0b24f5" />
      <Button text="submit" iconPath="/icons/github.png" url="#" />
      <Label labelText="HTML" />
      <Title text="Weather APP" />
      <ImageFrame imagePath="/images/berlin.png" borderColor="blue" />
    </div>
  );
}
