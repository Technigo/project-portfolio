import './Mywords.css'
import article1 from "/file-images/article1.png"
import article2 from "/file-images/article2.png"
import article3 from "/file-images/article3.png"
import article4 from "/file-images/article4.png"
import readArticle from "/icons/readArticle.png"

export const MyWords = () => {

    const mywordList = [
        {
            id: 1,
            image: article1,
            time: "September 2023",
            title: "Spring One Reflection",
            text: "The Spring One ",
            link: "The spring One ######", //change your article link
        },
        {
            id: 2,
            image: article2,
            time: "October 2023",
            title: "Spring Two Reflection",
            text: "The Sprint Two",
            link: "The spring Two ######", //change your article link
        },
        {
            id: 3,
            image: article3,
            time: "November 2023",
            title: "Spring Three Reflection",
            text: "The spring three ######",
            link: "The spring three ######", //change your article link
        },
        {
            id: 4,
            image: article4,
            time: "December 2023",
            title: "Spring Four Reflection",
            text: "The spring four ######",
            link: "The spring four ######", //change your article link
        }
    ];
    return (
        <div className="myword-container">
            <header>
                <h1>My Words</h1>
            </header>

            <article className="frame">
                {mywordList.map((myword) => {
                    return (
                        <div key={myword.id} className="article-container">
                            <img src={myword.image} alt="article's picture" />
                            <p>{myword.time}</p>
                            <h3>{myword.title}</h3>
                            <h5>{myword.text}</h5>
                            <a
                                href={myword.link}
                                target="_blank"
                                rel='noopener noreferrer'>
                                <button type="button">
                                    <img src={readArticle} alt="" />
                                </button>
                            </a>
                        </div>
                    );
                })}
            </article >
        </div >
    );
}
