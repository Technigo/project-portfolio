export const Tags = ({ tags }) => {


    return (
        <div className="tag">
            <ul>
                {tags.map((tag) => {
                    return (
                        <li>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}