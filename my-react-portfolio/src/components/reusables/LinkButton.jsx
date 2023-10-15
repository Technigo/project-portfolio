import './LinkButton.css'

export const LinkButton = ({ buttonText, className, homepage }) => {
    return (
        <button className={className} a href={homepage}>{buttonText}</button>
    )
}