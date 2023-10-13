import styles from "./ImageFrame.module.scss";

export default function ImageFrame({ imagePath, borderColor, description }) {
  //   this frame needs a wrapper div to define width/height-> cover ImageFrame component with div
  return (
    <div
      className={styles.frame}
      style={{
        backgroundImage: `url(${imagePath})`,
        borderBottom: `20px solid ${borderColor}`,
        borderLeft: `20px solid ${borderColor}`,
      }}
      role="img"
      aria-label={description}
    ></div>
  );
}
