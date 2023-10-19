import "./MyWords.css"

export const MyWords = () => {
    const wordsHeader = "My words"
    let wordsContent = ""

    return (
        <>
        <div className="border">
            <div className="grid-parent pink">
                <div className="section my-words">
                    <h1>{wordsHeader}</h1>
                    <h3 className="words-text">{wordsContent}.</h3>
                </div>
            </div>
        </div>
        </>
    )
}