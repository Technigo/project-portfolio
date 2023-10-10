// Component for all "main" headings, in my portfolio the main heading is an h2, since this is the most frequently used heading. H1 is only supposed to be present once and is therefor "hardcoded" into Introduction.jsx
export const MainHeading = ({ text, className }) => {
    return (
        <h2 className={`${className}`}>{text}</h2>
    )
}