
import article1 from "../../assets/articleImages/article1.png";
import article2 from "../../assets/articleImages/article2.png";
import article3 from "../../assets/articleImages/article3.png";
import article4 from "../../assets/articleImages/article4.png";
import { MyWordsCard } from "./MyWordsCard";



export const MyWords = () => {


    const articleInformation = [
        {
            id: "1a",
            image: article1,
            mediumSizeHeader: 'Title 1',
            time: '2022-12-03',
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            link: "#", //change your article link
        },
        {
            id: "2a",
            image: article2,
            mediumSizeHeader: 'Title 2',
            time: '2022-12-03',
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            link: "#", //change your article link
        },
        {
            id: "3a",
            image: article3,
            mediumSizeHeader: 'Title 3',
            time: '2022-12-03',
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            link: "#", //change your article link
        },
        {
            id: "4a",
            image: article4,
            mediumSizeHeader: 'Title 4',
            time: '2022-12-03',
            text: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            link: "#", //change your article link
        }
    ];

    return (
        <>
            {articleInformation.map((article) => (
                <div className="my-words-card-wrapper" key={article.id}>
                    <MyWordsCard
                        articleImage={article.image}
                        articleDate={article.time}
                        articleLink={article.link}
                        articleTitle={article.mediumSizeHeader}
                        articleText={article.text}
                    />
                </div>
            ))
            }
        </>
    )
}
