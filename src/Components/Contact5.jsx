
import { ProfilePhoto } from "./Reusablecomponents/ProfilePhoto.jsx";
import { SocialMedia } from "/src/Components/SocialMedia.jsx"

export const Contact5 = () => {
    return (
        <div className="contact-container">
            <h1>Let's talk</h1>
            <div className="contact-photo"><ProfilePhoto /></div>
            <p>Idah Collin <br />
                idah_collin@hotmail.com
            </p>
            <SocialMedia />
        </div>
    )
}
