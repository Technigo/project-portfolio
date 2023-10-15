// Component for images
import "./image.css";

// Component for a reusable image. Takes in several props to make it functional from multiple different components.
export const ImageComponent = ({ sectionClassName, elementClassName, link, ImageAltText }) => {
    return (
        <section className={sectionClassName}>
            <img className={elementClassName} src={link} alt={ImageAltText} />
        </section>
    )
}
