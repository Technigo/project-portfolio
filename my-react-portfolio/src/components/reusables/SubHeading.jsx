import './SubHeading.css'

export const SubHeading = ({ subHeading, className }) => {
    return (
        <h3 className={className}>{subHeading}</h3>
    )
}