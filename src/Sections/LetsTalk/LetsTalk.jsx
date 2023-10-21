import "/Frida.jpeg"
import "./LetsTalk.css"
import { socialmedia } from "../../../socialmedia.json"
import { SocialMediaButtons } from "../../Components/SocialMediaButtons/SocialMediaButtons"

export const LetsTalk = () => {
    let imageURL = "Frida.jpeg"

    return (
        <>
        <div className="grid-parent light">
            <div className="section lets-talk">
                <h1>Let&apos;s Talk</h1>
                <img className="profile-pic" src={imageURL} alt="Picture of Frida Kristiansson" width="20px" />
                <div className="contact-info">
                    <h4>Frida Kristiansson</h4>
                    <h4>+46(0)70 376 35 62</h4>
                    <h4><a href="mailto:frida.kristiansson@gmail.com">frida.kristiansson@gmail.com</a></h4>
                </div>
                <div className="social-media-buttons">
                    {socialmedia.map(item => (
                        <SocialMediaButtons key={item.name} name={item.name} link={item.link} imgURL={item.imageURL} />
                    ))}

                </div>
                
            </div>
        </div>
        </>
    )
}