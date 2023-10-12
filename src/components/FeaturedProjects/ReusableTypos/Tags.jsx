export const Tags = ({ tags, id }) => {

    console.log("tags", tags)

    return(
        <div>
            <ul>
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