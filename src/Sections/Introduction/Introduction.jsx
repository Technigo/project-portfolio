import Arrow from "/assets/Arrow.svg"
import "/Frida.jpeg"
import "./introduction.css"

export const Introduction = () => {
    // #region Variables containing text-content
    let introHeader = "Frontend Developer"
    let introGreeting = "Hi, I'm Frida Kristiansson"
    let introText = "Frida is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."
    let imageURL = "Frida.jpeg"
    // #endregion

    return(
        <>
        <div className="grid-parent light">
            <div className="section intro">
                <img className="profile-pic" src={imageURL} alt="Picture of Frida Kristiansson" width="20px" />
                
                <h3 className="title-sub-header">{introGreeting}</h3>
                <h1 className="title-header">{introHeader}</h1>
                <p className="intro-text">{introText}</p>
            </div>
        </div>
        <div className="icon-container">
            <a href="">
                <img className="arrow icon" src={Arrow} alt="Arrow-icon" />
            </a>
        </div>
        </>
    )
}