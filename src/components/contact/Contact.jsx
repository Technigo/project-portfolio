import "./contact.css"
import linkedinIcon from "../../assets/linkedin-grey.svg"
import githubIcon from "../../assets/github-grey.svg"
import instagramIcon from "../../assets/instagram-grey.svg"
import { Portrait } from "./../miscellaneous/Portrait"

export const Contact = () => {
	return (
		<div className='contact-container'>
			<h2>Where to find me</h2>
			<Portrait />
			<p>@ohistnathalie</p>
			<div className='social-links'>
				<a href='https://www.linkedin.com/in/nathalie-tu/'>
					<img className='icon' src={linkedinIcon} alt='Linkedin icon' />
				</a>
				<a href='https://github.com/ohitsnathalie/'>
					<img className='icon' src={githubIcon} alt='Github icon' />
				</a>
				<a href='https://www.instagram.com/ohitsnathalie/'>
					<img className='icon' src={instagramIcon} alt='Instagram icon' />
				</a>
			</div>
		</div>
	)
}
