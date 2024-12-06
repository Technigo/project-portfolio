import "./LetsTalk.css";
import profilePicture from "../assets/Icons/Ellipse 1.png";
import githubIcon from "../assets/icons/Btn - github.svg";
import linkedinIcon from "../assets/icons/Btn - linkedin.svg";
import stackoverflowIcon from "../assets/icons/Btn - stackoverflow.svg";



export const LetsTalk = () => {
	return (
		<section className="lets-talk">
			<h2 className="contact-h2">Let's Talk</h2>
			<img className="profile-picture" src={profilePicture} alt="Profile picture" />

			<div className="info">
				<p>Sara Svensson </p>
				<p> +46(0)763 12 33 45 </p>
				<p> sara.svensson@mail.com </p>
			</div>
			<div className="icons-container">
				<img className="icon" src={githubIcon} alt="Github icon" />
				<img className="icon" src={linkedinIcon} alt="Phone icon" />
				<img className="icon" src={stackoverflowIcon} alt="Location icon" />
			</div>

		</section>
	)

}
