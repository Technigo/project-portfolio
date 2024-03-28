import gitImage from "/github_icon.svg";
import globeImage from "/world_icon.svg";
import "./Button.css";

export const Button = ({ image, text, source, color }) => {
  let icon = "";
  if (image === "Globe") {
    icon = globeImage;
  }
  if (image === "GitHub") {
    icon = gitImage;
  }
  if (image === "Article") {
    icon = "../../assets/article.png";
  }
  console.log(icon);
  return (
    <div className={`link-button ${color}`}>
      <a href={source}>
        <div className="button-interior">
          <img src={icon} alt={`${image} icon`} />
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};
