import styles from "./ImageFrame.module.scss";

export default function ImageFrame({ imagePath, borderColor }) {
  return (
    <div
      className={`${styles.frame} ${
        borderColor === "blue" ? styles.projects_img : styles.blog_img
      }`}
      style={{ backgroundImage: `url(${imagePath})` }}
    ></div>
  );
}
