export const Tags = ({ tags }) => {

    console.log("tags", tags)

    return(
        <div>
            <ul>
                {tags.map((tag) => {
                    return (
                        <li className="tag">
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}