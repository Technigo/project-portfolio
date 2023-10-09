import { MainHeading } from "./ReusableComponents/Typography/MainHeading.jsx";
import { SubHeading } from "./ReusableComponents/Typography/SubHeading.jsx";
import { CircularImage } from "./ReusableComponents/ImageElements/CircularImage.jsx";
import { NormalText } from "./ReusableComponents/Typography/NormalText.jsx";

const introText = "Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

export const Introduction = () => {
    return (
        <header>
            <SubHeading text={"Hi, I'm Laura Lyckholm"} />
            <MainHeading text={"Frontend Developer"} />
            <CircularImage />
            <NormalText text={introText} />
        </header>
    )
}
