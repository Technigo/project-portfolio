export const FullWidthImage = ({ className, link, ImageAltText }) => {
    return (
        <section className={`${className}`}>
            <img src={`${link}`} alt={`${ImageAltText}`} />
        </section>
    )
}
