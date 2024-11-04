import "./MyWords.css";
import { Buttons } from "./Buttons";
import imgOne from "../assets/project-images/img-one.png";
import imgTwo from "../assets/project-images/img-two.png";
import imgThree from "../assets/project-images/img-three.png";
import netlifyIcon from "../assets/icons/netlify.svg";
import { SeeMoreButton } from "./SeeMoreButton";


export const MyWords = () => {
	const readArticleButton = [
		{
			url: "#",
			icon: netlifyIcon,
			text: "Read Article",
		},
	];

	return (
		<section className="MyWords">
			<h2 className="MyWords-heading">My Words</h2>

			{/* Article one */}
			<img className="article-image" src={imgOne} alt="Description of the image" />
			<time>July 14th</time>
			<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
			<p className="article-intro">The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
			<Buttons buttons={readArticleButton} className="read-article-button" />

			{/* Article two */}
			<img className="article-image" src={imgTwo} alt="Description of the image" />
			<time>July 14th</time>
			<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
			<p className="article-intro">The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
			<Buttons buttons={readArticleButton} className="read-article-button" />

			{/* Article three */}
			<img className="article-image" src={imgThree} alt="Description of the image" />
			<time>July 14th</time>
			<h3 className="article-heading">How to stop being scared: Learning to love code</h3>
			<p className="article-intro">The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.</p>
			<Buttons buttons={readArticleButton} className="read-article-button" />

			<SeeMoreButton text="See More Articles" url="#" variant="articles" />
		</section>
	);
};
