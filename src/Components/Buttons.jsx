import "./Buttons.css";

export const Buttons = ({ homepage, url, sectionId }) => {
    //How to switch from normal to hover state?
    if (sectionId === 3) {
        return (
            <div className="buttons project">
                <a 
                    href={homepage}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span role="button" className="live-demo button">
                        <img src="/buttons/Live-Demo-Button.png" alt="Button to view live demo" />
                    </span>
                </a>

                <a 
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span role="button" className="github button">
                        <img src="/buttons/View-Code-Button.png" alt="Button to view code on Github" />
                    </span>
                </a>
            </div>
        )
    };
    
    if (sectionId === 4) {
        return (
            <div className="buttons read-more">
                <a 
                    href=""
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span role="button" className="read-more button">
                        <img src="/buttons/Read-On-Medium.png" alt="Button to view whole article on Medium" />
                    </span>
                </a>
            </div>
        )
    }

}
