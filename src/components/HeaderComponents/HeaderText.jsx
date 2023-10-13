
export const HeaderText = ({ h1Text, h2Text, h3Text }) => {
    return (
        <div className="header-text">
            <div className="left">
                <h3>{h3Text}</h3>
                <h1>{h1Text}</h1>
            </div>
            <div className="right">
                <h2>{h2Text}</h2>
            </div>

        </div>
    );
};
