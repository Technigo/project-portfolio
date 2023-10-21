//Import of reusable component 'ProfilePhoto'
import { ProfilePhoto } from "./Reusablecomponents/ProfilePhoto.jsx";

import './hello.css'

// Export without props. Displays the Hello/Header-section. ProfilePhoto, reusable component, is imoprted and below it's exported.
export const Hello = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div className="name-title">
                    <h3>Hi, I'm Idah Collin</h3>
                    <h1>Frontend Developer</h1> </div>
                <div className="profile-photo"><ProfilePhoto /> </div>
                <div className="intro"><p> I'm a junior frontend developer known for my structure and leader-skills. I create user-friendly applications and solve complex issues. My drive of getting the whole team succeed makes me a valuable asset to any project.</p></div>
            </div>
            <div className="arrow">
                <img src="/assets/arrow.svg" alt="Arrow to remind to go further down on the page" />
            </div>
        </header>
    )
}
