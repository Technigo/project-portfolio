import "./mediumHeadline.css";

export const MediumHeadline = ({ mediumSizeHeader, id, className, useSpan }) => {

   // In the SkillSets component, a <span> is added to the MediumHeadline to accommodate the background color. For other components using MediumHeadline, a <span> is not needed. The ternary operator checks the value of useSpan to determine whether to include a <span> element based on the context.

    const headline = (
        <h2 id={id} className="medium-headline">
            {useSpan ? <span className={`${className}`}>{mediumSizeHeader}</span> : mediumSizeHeader}
        </h2>
    );

    return (
        <>
            {useSpan ? headline: headline}
        </>
    );
}




