
export const BtnLink = ({link, src, alt, btnContent, btnName}) => {
    return (
        <a href={link}className="link-btn"><img src={src} alt={alt} className={`${btnName}`}/>{btnContent}</a>
    )
}

//use if state to change the hover svg, by the classname, so can make all the