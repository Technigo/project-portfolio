export const Button = (image, text, source) => {
    let icon;
    if (image === "globe") {
        return icon = "../../assets/world_icon.svg";
    }
    else if (image === "github") {
        return icon = "../assets/github_icon.svg";
    }
    else if (image === "article") {
        return icon = "../assets/article.png";
    }
    return (
            <a className="link-button" href={source}><img src={icon} alt="Icon"></img> {text}</a>
    );
}