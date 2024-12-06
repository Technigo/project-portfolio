import "./MyWords.css";
import { Buttons } from "./Buttons";
import imgOne from "../assets/project-images/img-one.png";
import imgTwo from "../assets/project-images/img-two.png";
import imgThree from "../assets/project-images/img-three.png";
import netlifyIcon from "../assets/Icons/netlify.svg";
import { SeeMoreButton } from "./SeeMoreButton";

export const MyWords = () => {
	const readArticleButton = [
		{
			url: "#",
			icon: netlifyIcon,
			text: "Read Article",
			className: "read-article-button",
			iconClass: "read-article-icon",
		},
	];

	return (
		<section className="MyWords">
			<h2 className="MyWords-heading">My Words</h2>

			{/* Article one */}
			<div className="article-container">
				<img className="article-image" src={imgOne} alt="Description of the image" />
				<div className="article-text">
					<time>July 14th</time>
					<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
					<p className="article-intro">
						The chat bot app is a conversational AI-powered tool designed to enhance user experience by
						providing instant, personalized, and automated responses to user inquiries.
					</p>
					<Buttons buttons={readArticleButton} />
				</div>
			</div>

			{/* Article two */}
			<div className="article-container">
				<img className="article-image" src={imgTwo} alt="Description of the image" />
				<div className="article-text">
					<time>July 14th</time>
					<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
					<p className="article-intro">
						The chat bot app is a conversational AI-powered tool designed to enhance user experience by
						providing instant, personalized, and automated responses to user inquiries.
					</p>
					<Buttons buttons={readArticleButton} />
				</div>
			</div>

			{/* Article three */}
			<div className="article-container">
				<img className="article-image" src={imgThree} alt="Description of the image" />
				<div className="article-text">
					<time>July 14th</time>
					<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
					<p className="article-intro">
						The chat bot app is a conversational AI-powered tool designed to enhance user experience by
						providing instant, personalized, and automated responses to user inquiries.
					</p>
					<Buttons buttons={readArticleButton} />
				</div>
			</div>

			<SeeMoreButton text="See More Articles" url="#" variant="articles" />
		</section>
	);
};
