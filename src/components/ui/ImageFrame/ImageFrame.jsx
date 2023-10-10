import styles from "./ImageFrame.module.scss";

export default function ImageFrame({ imagePath, borderColor, description }) {
  //  projects section border -> blue / blog border->pink
  return (
    <div
      className={`${styles.frame} ${
        borderColor === "blue" ? styles.projects_img : styles.blog_img
      }`}
      style={{ backgroundImage: `url(${imagePath})` }}
      role="img"
      aria-label={description}
    ></div>
  );
}
