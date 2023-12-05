import React, { useState, useEffect } from "react";
import ReadArticleBtn from "./buttons/ReadArticleBtn";
import articlesData from "../data/articles.json";
import './mywordstablet.css';

const Mywords = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(articlesData.articles);
    }, []);

    return (
        <div className="mywords">

            <h1>My Words</h1>
            <div className="mywords-container">
                {articles.map((articles, index) => (
                    <div key={index} className="mywords-child">
                        <div className="mywords-details">
                            <img className="articlesimg" src={articles.image} alt={articles.name} />
                            <div className="date">{articles.date}</div>
                            <h2>{articles.name}</h2>
                            <p>{articles.description}</p>
                            <div className="mywords-actions">
                                <a href={articles.link} target="_blank" rel="noopener noreferrer">
                                    <ReadArticleBtn />
                                </a>

                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default MywordsTablet; 