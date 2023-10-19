/* eslint-disable react/prop-types */
import { Buttons } from "../Buttons/Buttons"
import { Tags } from "../Tags/Tags"

import "./Article.css"

export const Article = ({ article }) => {
    const { name, image, textContent, articleLink, date } = article
    return (
        <>
            <img className="article-pic" src={image} alt={name} />

            <Tags tag={date} />
            <h4>{name}</h4>
            <p>{textContent}</p>

            <div className="button-container">
                <Buttons url={articleLink} text="Read article" hovColor="article" />
            </div>
        </>
    )
}