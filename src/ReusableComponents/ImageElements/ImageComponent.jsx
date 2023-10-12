// Component for images
import "./image.css";

export const ImageComponent = ({ sectionClassName, elementClassName, link, ImageAltText }) => {
    return (
        <section className={sectionClassName}>
            <img className={elementClassName} src={link} alt={ImageAltText} />
        </section>
    )
}
