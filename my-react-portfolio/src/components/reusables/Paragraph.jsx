import './Paragraph.css'

export const Paragraph = ({ text, className }) => {
    return (
        <p className={className}>{text}</p>
    )
}