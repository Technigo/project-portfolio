import "./mediumHeadline.css"


export const MediumHeadline = ({ mediumSizeHeader, id, className, useSpan }) => {
    const mediumHeading = (
        <h2 id={id} className="medium-headline">
            {useSpan ? <span className={`${className}`}>{mediumSizeHeader}</span> : mediumSizeHeader}
        </h2>
    );

    return (
        <>
            {useSpan ? <>{mediumHeading}</> : mediumHeading}
        </>
    );
}



