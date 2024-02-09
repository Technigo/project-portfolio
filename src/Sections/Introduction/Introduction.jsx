import { FaUpLong } from "react-icons/fa6";
import "/Frida.jpeg"
import "./introduction.css"

export const Introduction = () => {

    return(
        <>
        <div className="grid-parent light">
            <div className="intro section">
                <img className="profile-pic" src="Frida.jpeg" alt="Picture of Frida Kristiansson" width="20px" />
                
                <h3 className="title-sub-header">Hi, I&apos;m Frida Kristiansson</h3>
                <h1 className="title-header">Frontend Developer</h1>
                <p className="intro-text">
                    {`I am a Frontend Developer with a love for innovative solutions and clean code. With a background as a medical doctor and a love for mathematics I have a unique foundation as I step into the Tech-field. 
My drive for excellence and my passion to learn makes me a valuable asset to any project.`}
                </p>
            </div>
        </div>
        <div className="icon-container">
            <a href="#tech-section">
                <FaUpLong className="arrow icon" />
            </a>
        </div>
        </>
    )
}