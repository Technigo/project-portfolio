export const Tags = ({ tags, id }) => {

    console.log("tags", tags)

    return(
        <div>
            <ul>
                {tags.map((tag) => {
                    return (
                        <li className="tag" > {/*CAN I ADD A KEY??? HOW ELSE?!*/}
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}