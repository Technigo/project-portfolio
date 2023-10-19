/* eslint-disable react/prop-types */
import "/assets/document.svg"
import "/assets/globe.svg"
import "/assets/github.svg"
import "./buttons.css"


export const Buttons = ({ url, text, hovColor }) => {
    return (
        <button type="button" href={url} className={hovColor + "-button" + " button"}>
            {hovColor === "github" && <img className="github icon-btn" src="../../assets/github.svg" />}
            {hovColor === "netlify" && <img className="netlify icon-btn" src="../../assets/globe.svg" />}
            {/* FOR ARTICLE LATER {hovColor === "github" && <img src="../../assets/github.svg" />} */}
            <p className="button-text">{text}</p>
        </button>
    )
}