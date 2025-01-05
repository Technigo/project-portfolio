import "./Introduction.css";
import profileImage from "../../assets/selfie.jpg"; // Picture importation
import arrowImage from "../../Arrow.svg"; // Arrow importation

export const Introduction = () => {
    return (
        <div>
            <div className="profile">
                <img src={profileImage} alt="Picture of Sherry the Developer." />
                <div className="person">
                    <p className="sherry">Hi, I am Sherry</p>
                    <p className="job">Frontend Developer</p>
                    <p className="description">
                        Sherry is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.
                    </p>
                </div>
            </div>
            <div className="arrow-box">
                <img src={arrowImage} alt="Arrow icon" />
            </div>
        </div>
    );
};
