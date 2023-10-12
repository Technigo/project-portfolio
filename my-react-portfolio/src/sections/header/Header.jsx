import './Header.css'
import { Heading } from '/src/components/typography/Heading.jsx';
import arrowImage from '/src/assets/social-icons/arrow.svg'

export const Header = () => {
    return (

        <header className="header-container">
            <div className="profile-wrapper">
                <div className="profile-img">
                    <img src="./src/assets/profile-image.png" alt="profile picture of Maria" />
                </div>
                <div className="profile-headings">
                    <h2>Hi, I'm Maria Pettersson</h2>
                    <Heading level={1} text="Frontend Developer" className="header-heading" />
                </div>
                <p className="profile-paragraph">Maria is an exceptional developer lorem lorem</p>
            </div>
            <div className="profile-wrapper-tablet">
                <div className="profile-headings">
                    <h2>Hi, I'm Maria Pettersson</h2>
                    <Heading level={1} text="Frontend Developer" className="header-heading" />
                </div>
                <div className="profile-description">
                    <div className="profile-img">
                        <img src="./src/assets/profile-image.png" alt="profile picture of Maria" />
                    </div>
                    <p className="profile-paragraph">Maria is an exceptional developer lorem lorem</p>
                </div>
            </div>
            <div className="arrow-container">
                <img src={arrowImage} alt="Animated Arrow" className="arrow" />
            </div>
        </header>
    );
};
