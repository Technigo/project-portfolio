/* eslint-disable react/prop-types */
import { Buttons } from "../Buttons/Buttons"
import { Tags } from "../Tags/Tags"

import "./Article.css"

export const Article = ({ article }) => {
    const { name, image, textContent, articleLink, date } = article
    return (
        <>
        <div>
            <img className="article-pic" src={image} alt={name} />

            <div className="article-text">
                <Tags tag={date} />
                <h4>{name}</h4>
                <p>{textContent}</p>

                <div className="button-container">
                    <Buttons url={articleLink} text="Read article" hovColor="article" />
                </div>
            </div>
        </div>
        </>
    )
}