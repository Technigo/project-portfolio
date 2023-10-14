import "./myWordsPage.css";

import { Headline } from "../components/Headline";
import { MyWords } from "../components/MyWordsComponent/MyWords";




export const MyWordsPage = () => {
    let headerText = "My Words";


    return (
        <section className="my-words-page-wrapper">
            <Headline className="big-heading pink-h1" headerText={headerText} />
            <MyWords />
        </section>
    )
}
