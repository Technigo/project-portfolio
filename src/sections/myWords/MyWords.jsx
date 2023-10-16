import article1 from "/file-images/article1.png"
import article2 from "/file-images/article2.png"
import article3 from "/file-images/article3.png"
import article4 from "/file-images/article4.png"
import readArticle from "/icons/readArticle.png"
import readArticleHover from "/icons/readArticleHover.png"
import divider from "/icons/divider.png"
import { SectionTitle } from '../../reusableComponents/texts/SectionTitle'
import { MediumsizedTitle } from '../../reusableComponents/texts/MediumsizedTitle'
import { NormalText } from '../../reusableComponents/texts/NormalText'
import './MyWords.css'

export const MyWords = () => {

    const myWordTitle = "My words"
    const mywordList = [
        {
            id: 1,
            image: article1,
            time: "September 2023",
            title: "Spring One Reflection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            link: "The spring One ######", //change your article link
        },
        {
            id: 2,
            image: article2,
            time: "October 2023",
            title: "Spring Two Reflection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "The spring Two ######", //change your article link
        },
        {
            id: 3,
            image: article3,
            time: "November 2023",
            title: "Spring Three Reflection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "The spring three ######", //change your article link
        },
        {
            id: 4,
            image: article4,
            time: "December 2023",
            title: "Spring Four Reflection",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: "The spring four ######", //change your article link
        }
    ];
    return (
        <div className="myword-container">
            <div className="divider">
                <img src={divider} alt="" />

            </div>
            <SectionTitle sectionTitletext={myWordTitle} />

            <article className="frame">
                {mywordList.map((myword) => {
                    return (
                        <div key={myword.id} className="article-container">
                            <img src={myword.image} alt="article's picture" />
                            <p className='article-tag'>{myword.time}</p>
                            <MediumsizedTitle mediumHeader={myword.title} />
                            <NormalText text={myword.text} />
                            <a
                                href={myword.link}
                                target="_blank"
                                rel='noopener noreferrer'>
                                <button type="button">
                                    <img className="read-article" src={readArticle} alt="" />
                                    <img className="read-article-hover" src={readArticleHover} alt="" />
                                </button>
                            </a>
                        </div>
                    );
                })}
            </article >
        </div >
    );
}
