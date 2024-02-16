/* eslint-disable react/prop-types */
import "./tech.css"

export const Tech = () => {
    let techHeader = "Tech"
    let techContent = 
        ["HTML", 
        "CSS", 
        "JavaScript", 
        "React", 
        "React Hooks", 
        "Flexbox/Grid", 
        "API:s", 
        "Node.js", 
        "Mongoose", 
        "Zustand", 
        "Web accessibility", 
        "Mob programming", 
        "Pair programming", 
        "Github"]

    return (
        <>
        <div className="grid-parent dark" id="tech-section">
            <div className="section tech">
                <h1>{techHeader}</h1>
                <h3 className="tech-text">{techContent.join(", ")}.</h3>
            </div>
        </div>
        </>
    )
}