import "./tags.css";

export const Tags = ({ tags, id }) => {

    console.log("tags", tags)

    return(
        <div className="tag-wrapper">
            <ul className="tag-list">
                {tags.map((tag) => {
                    return (
                        <li className="tag" > 
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}