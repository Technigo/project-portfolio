import "../components/headline.css";
import "../components/mediumHeadline.css";
import "../components/textbox.css";
import "./frontPage.css";
import "../components/FrontPage/arrow.css";
import { Headline } from "../components/Headline";
import { ImagePortrait } from "../components/ImagePortrait";
import { MediumHeadline } from "../components/MediumHeadline";
import { Textbox } from "../components/Textbox";
import { Arrow } from "../components/FrontPage/Arrow";



export const FrontPage = () => {

    let mediumSizeHeader = "Hi, I'm Veronica Åström";
    let headerText = "Frontend Developer";
    let text = "Veronica is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field."


    return (
        <>
            <section className="intro-page-wrapper">
                <ImagePortrait />
                <div className="front-page-headings">
                    <MediumHeadline
                        mediumSizeHeader={mediumSizeHeader}
                        id="smaller-intro-h2"
                        useSpan={false}
                    />
                    <Headline
                        id="smaller-intro-h1"
                        className="big-heading blue-h1"
                        headerText={headerText} />
                </div>
                <div className="intropage-info">
                    <Textbox text={text} />
                </div>
                <div className="arrow-animation">
                    <Arrow />
                </div>
            </section>
        </>
    )
}

