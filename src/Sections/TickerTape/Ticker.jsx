/* eslint-disable react/prop-types */
export const Ticker = ({ phrase, number }) => {
    const pair = (number%2)

    return(
        <div className="ticker-tape-collection">
            {pair === 0 ?
            <div className="ticker-tape-story">
                <span>{phrase}</span>
            </div>
            :
            <div className="ticker-tape-story-2">
                <span>{phrase}</span>
            </div>
            }
        </div>
    )
}