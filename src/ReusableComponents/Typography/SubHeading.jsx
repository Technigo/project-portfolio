// Component for subheadings, in my portfolio these are H3:s. Takes in both className and text as props from it's parents.
export const SubHeading = ({ className, text }) => {
    return (
        <h3 className={className}>{text}</h3>
    )
}
