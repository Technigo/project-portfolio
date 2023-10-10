import './Heading.css'

export const Heading = ({ heading, className }) => {
    return (
        <h2 className={className}>{heading}</h2>
    )
}