import './Tags.css'

export const Tags = ({ taglist }) => {
    return (
        <>
            <div className="project-tags">
                {taglist.map((tag) => (
                    <p key={tag} >
                        {tag}
                    </p>
                )
                )
                }
            </div >
        </>
    )
}
