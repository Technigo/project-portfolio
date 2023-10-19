import "./tech.css"

export const Tech = () => {
    let techHeader = "Tech"
    let techContent = ["HTML", "CSS", "JavaScript", "JSX", "React", "React Hooks", "API:s", "Web Accessibility", "Mob programming", "Pair programming", "Github"]

    return (
        <>
        <div className="grid-parent dark">
            <div className="section tech">
                <h1>{techHeader}</h1>
                <h3 className="tech-text">{techContent.join(", ")}.</h3>
            </div>
        </div>
        </>
    )
}