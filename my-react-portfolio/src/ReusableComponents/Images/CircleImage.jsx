import "./image.css";
import evelyn from "../Images/cvimage/evelyn.png"


export const CircleImage = () => {
    return (
        <img className="circle-image" src={evelyn} alt="Profile Image of Evelyn" />
    );
};