//Import react if needed here
import { ProfilePhoto } from "./Reusablecomponents/ProfilePhoto.jsx";

export const Hello1 = () => {
    return (
        <header>
            <div className="name-title">
                <h3>Hi, I'm Idah Collin</h3>
                <h1>Frontend Developer</h1> </div>
            <div className="profile-photo"><ProfilePhoto /> </div>{/*Reusable component*/}
            <div className="intro"><p> I'm a junior frontend developer known for.... xxxx her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field xxx.</p></div>
        </header>
    )
}
