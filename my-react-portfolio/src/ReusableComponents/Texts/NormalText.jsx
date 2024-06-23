import "./text.css";

export const NormalText = ({ className, text }) => {
    return (
        <p className={className}>{text}</p>
    )
}