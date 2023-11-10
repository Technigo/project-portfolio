//Reusable component

export const Tags = ({ tags }) => {
    return (
        <div className="tag">
            <ul>
                {tags.map((tag, index) => {
                    return (
                        <li key={index}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}