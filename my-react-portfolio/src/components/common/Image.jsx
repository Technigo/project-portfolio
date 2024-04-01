import "./image.css";

export const Image = ({ sectionClassName, elementClassName, src, alt }) => {
  return (
    <section className={sectionClassName}>
      <img className={elementClassName} src={src} alt={alt} />
    </section>
  );
};
