//Resusable component for main heading used in all sections
export const MainHeading = ({ text, className }) => {
    return (
        <h2 className={className}>{text}</h2>
    )
}