import "./ProjectImages.css";

import imgOne from "../assets/project-images/img-one.png";
import imgTwo from "../assets/project-images/img-two.png";
import imgThree from "../assets/project-images/img-three.png";

const imageMap = {
    "img-one.png": imgOne,
    "img-two.png": imgTwo,
    "img-three.png": imgThree,
};

export const ProjectImages = ({ image }) => {
    const imageSrc = imageMap[image];

    if (!imageSrc) {
        console.error(`Image not found: ${image}`);
        return null;
    }

    return (
        <div className="outer-image-wrapper">
            <div className="project-image-wrapper">
                <img src={imageSrc} className="project-image" alt="Project image" />
            </div>
        </div>
    );
};
