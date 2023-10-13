import './LinkButton.css'

export const LinkButton = ({ buttonText, className }) => {
    return (
        <button className={className}>{buttonText}</button>
    )
}