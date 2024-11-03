export const SocialMediaIcon = ({ link, icon, altText, ariaLabel }) => {

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="social-media-icon"
    >
      <img src={icon} alt={altText} className="social-icon" />
    </a>
  )
}
