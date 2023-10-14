import { Headline } from "../components/Headline";
import { ImagePortrait } from "../components/ImagePortrait";
import { MediumHeadline } from "../components/MediumHeadline";
import { Textbox } from "../components/Textbox";



export const FrontPage = () => {

    let mediumSizeHeader = "Hi, I'm Veronica Åström";
    let headerText = "Frontend Developer";
    let text = "Veronica is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."


    return (
        <>
            <div className="intro-page-wrapper">
                <ImagePortrait />
                <MediumHeadline mediumSizeHeader={mediumSizeHeader} />
                <Headline id="smaller-h1" className="big-heading blue-h1" headerText={headerText} />
            </div>
            <div className="intropage-info">
                <Textbox text={text} />
            </div>
        </>
    )
}

