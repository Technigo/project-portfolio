import "./mediumHeadline.css"


export const MediumHeadline = ({ mediumSizeHeader, className }) => {
    return (
        <>
            <h2 className="medium-headline"><span className={`${className}`}>{mediumSizeHeader}</span></h2>
        </>
    )
}


