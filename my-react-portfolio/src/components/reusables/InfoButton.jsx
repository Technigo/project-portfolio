import './InfoButton.css'

export const InfoButton = ({buttonText, className }) => {
    return (
        <button className={className}>{buttonText}</button>
    )
}