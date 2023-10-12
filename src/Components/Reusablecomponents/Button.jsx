
export const Button = ({ link, buttonName, icon, iconAlt }) => {
    return (
        <div>
            <a href={link}><img src={icon} alt={iconAlt} />{buttonName}</a>
        </div>
    )
}