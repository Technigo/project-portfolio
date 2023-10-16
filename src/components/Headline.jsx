import "./headline.css"


export const Headline = ({ headerText, id, className }) => {
    return (
        <>
            <h1 id={id} className={`"big-heading" ${className}`}>{headerText}</h1>
        </>
    )
}