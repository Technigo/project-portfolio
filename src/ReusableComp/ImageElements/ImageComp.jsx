import "./image.css";

//Resusable component for images
export const ImageComponent = ({ sectionClassName, elementClassName, ImageAltText, imagePath }) => {
    return (
        <section className={sectionClassName}>
            <img className={elementClassName} src={imagePath} alt={ImageAltText} />
        </section>
    );
}
