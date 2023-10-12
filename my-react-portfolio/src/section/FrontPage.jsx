import { Headline } from "../components/Headline";
import { MediumHeadline } from "../components/MediumHeadline";
import { Textbox } from "../components/Textbox";



export const FrontPage = () => {

    let mediumSizeHeader = "Hi, I'm Veronica Åström";
    let headerText = "Frontend Developer";
    let text = "add info about my self here :)"


    return (
        <>
            <div className="intro-page-wrapper">
                <MediumHeadline mediumSizeHeader={mediumSizeHeader} />
                <Headline headerText={headerText} />
            </div>
            <div className="intropage-info">
                <Textbox text={text} />
            </div>
        </>
    )
}

