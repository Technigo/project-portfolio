import "./image.css";

export const ImageComponent = ({ sectionClassName, elementClassName, ImageAltText }) => {
    const imagePath = "./profilepic.jpg"; 

    return (
        <section className={sectionClassName}>
            <img className={elementClassName} src={imagePath} alt={ImageAltText} />
        </section>
    );
}