export const Button = ({ btnURL, iconURL, imgAlt, btnText }) => {
    return (
        <a href={btnURL}>
            <button type="button">
                <img src={iconURL} alt={imgAlt} />
                {btnText}
            </button >
        </a>
    )
}
