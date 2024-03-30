import "./Image.css";

export const Image = ({
  divClassName,
  elementClassName,
  imagePath,
  imageAltText,
}) => {
  return (
    <div className={divClassName}>
      <img className={elementClassName} src={imagePath} alt={imageAltText} />
    </div>
  );
};
