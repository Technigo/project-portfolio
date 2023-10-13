export const Button = ({ link, icon, iconAlt }) => {


    return(
        <div className="button-container">
            <a href={link} className="livedemoandviewlivebutton">
            <img src={icon} alt={iconAlt} />
            </a>
        </div>
    )
}