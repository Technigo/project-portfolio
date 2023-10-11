import './Header.css'
import { Heading } from '/src/components/Heading.jsx';
import arrowImage from '/src/assets/social-icons/arrow.svg'

export const Header = () => {

    return (
        <header>
            <div className="profile-img">
                <img src="./src/assets/profile-image.png" alt="profile picture of Maria"></img>
            </div>
            <div className="presentation">
                <h2>Hi, I'm Maria Pettersson</h2>
                <Heading level={1} text="Frontend Developer" className="header-heading" />
                <p>Maria is an exceptional developer lorem lorem</p>
                <div className="arrow-container">
                    <img src={arrowImage} alt="Animated Arrow" className="arrow" />
                </div>
            </div>
        </header>
    );
};