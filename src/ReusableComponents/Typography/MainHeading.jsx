// Component for all "main" headings, in my portfolio the main heading is an H2, since this is the most frequently used heading. H1 is only supposed to be present once and is therefore "hardcoded" into Introduction.jsx
export const MainHeading = ({ text, className }) => {
    return (
        <h2 className={className}>{text}</h2>
    )
}