
export const BtnLink = ({link, src, alt, btnContent}) => {
    return (
        <a href={link}className="link-btn"><img src={src} alt={alt} className="btn"/>{btnContent}</a>
    )
}