/* eslint-disable react/prop-types */
import "/assets/document.svg"
import "/assets/globe.svg"
import "/assets/github.svg"
import "./buttons.css"


export const Buttons = ({ url, text, hovColor }) => {
    return (
        <a href={url} target="_blank" className={hovColor + "-button" + " button"} rel="noreferrer">

        {hovColor === "github" && 
        <img
            className="github icon-btn"
            src="../../assets/github.svg"
            alt={`icon for button that links to ${hovColor}`} />}

        {hovColor === "netlify" && 
        <img 
            className="netlify icon-btn" 
            src="../../assets/globe.svg" 
            alt={`icon for button that links to ${hovColor}`} />}

        {hovColor === "article" && 
        <img 
            src="../../assets/document.svg" 
            alt={`icon for button that links to ${hovColor}`} />}
        
        <p className="button-text">{text}</p>

        </a>
    )
}