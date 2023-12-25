//Import of reusable component 'ProfilePhoto'
import { ProfilePhoto } from "./Reusablecomponents/ProfilePhoto.jsx"

import './hello.css'

// Export without props. Displays the Hello/Header-section. ProfilePhoto, reusable component, is imoprted and below it's exported.
export const Hello = () => {
    return (
        <header>
            <div className="wrapper-container">
                <div className="header-wrapper">
                    <div className="name-title">
                        <h3>Hi, I'm Idah Collin</h3>
                        <h1>Frontend Developer</h1> </div>
                    <div className="profile-photo"><ProfilePhoto /> </div>
                    <div className="intro"><p> I'm a frontend developer with a background as a Health developer, project leader and manager. I create user-friendly applications and solve complex issues. When I'm not coding, being out-doors is how I recharge. A hike, skiing or just enjoying time with family and friends are what gives me energy! </p></div>
                </div>
            </div>
            <div className="arrow">
                <img src="/assets/arrow.svg" alt="Arrow to remind to go further down on the page" />
            </div>
        </header>
    )
}
