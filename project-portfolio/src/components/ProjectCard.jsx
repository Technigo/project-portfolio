
import "./ProjectCard.css";
import { Buttons } from "./Buttons";
import imgLeft from "../assets/project-images/img-one.png";
import imgMiddle from "../assets/project-images/img-two.png";
import imgRight from "../assets/project-images/img-three.png";
import netlifyIcon from "../assets/icons/netlify.svg";
import githubIcon from "../assets/icons/github.svg";

export const ProjectCard = ({ title, image, description, tags, netlifyUrl, githubUrl }) => {
	const projectButtons = [
		{
			url: netlifyUrl,
			icon: netlifyIcon,
			text: "Live Demo",
		},
		{
			url: githubUrl,
			icon: githubIcon,
			text: "View Code",
		},
	];

	// Mapping images 
	let displayedImage;
	if (image === "img-one.png") displayedImage = imgLeft;
	if (image === "img-two.png") displayedImage = imgMiddle;
	if (image === "img-three.png") displayedImage = imgRight;

	return (
		<div className="project-card">
			<div className="project-image-wrapper">
				<img src={displayedImage} alt={`${title} screenshot`} className="project-image" />
			</div>
			<h3 className="project-title">{title}</h3>
			<p>{description}</p>
			<div className="tags-container">
				{tags.map((tag, index) => (
					<span key={index} className="tag">{tag}</span>
				))}
			</div>
			<Buttons buttons={projectButtons} />
		</div>
	);
};
