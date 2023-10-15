import "./myWordsPage.css";
import "../components/headline.css";
import waveDivider from "../assets/wave-divider/waveDivider.png";

import { Headline } from "../components/Headline";
import { MyWords } from "../components/MyWordsComponent/MyWords";




export const MyWordsPage = () => {
    let headerText = "My words";

    return (
        <section className="my-words-page-wrapper">
            {/* // Leaving the alt text since the divider isn't important" */}
            <img src={waveDivider} alt="" className="wavy-divider" />
            <div className="my-words-article-content">
                <Headline className="big-heading pink-h1" headerText={headerText} />
                <MyWords />
            </div>
        </section>
    )
}
