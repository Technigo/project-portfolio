/* eslint-disable react/prop-types */

export const SocialMediaButtons = ({ name, link, imgURL }) => {
    return(
        <a className="social-button" href={link} target="_blank" rel="noreferrer">
            <img src={imgURL} alt={name} />
        </a>
    )
}