import Sheryll from '/file-images/Sheryll.jpg'
import './CircleImage.css'

export const CircleImage = () => {
    return (
        <div className="profile-img">
            <img src={Sheryll} alt="profile image of Sheryll" />
        </div>
    )
}
