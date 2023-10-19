/* eslint-disable react/prop-types */
import "/assets/document.svg"
import "/assets/globe.svg"
import "/assets/github.svg"
import "./buttons.css"


export const Buttons = ({ url, text, hovColor }) => {
    return (
        <a href={url} target="_blank" className={hovColor + "-button" + " button"} rel="noreferrer">
            {hovColor === "github" && <img className="github icon-btn" src="../../assets/github.svg" />}
            {hovColor === "netlify" && <img className="netlify icon-btn" src="../../assets/globe.svg" />}
            {/* FOR ARTICLE LATER {hovColor === "github" && <img src="../../assets/github.svg" />} */}
            <p className="button-text">{text}</p>
        </a>
    )
}