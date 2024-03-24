import "../styling/contact.css"
import linkedinIcon from "../assets/linkedin-grey.svg"
import githubIcon from "../assets/github-grey.svg"
import instagramIcon from "../assets/instagram-grey.svg"

export const Contact = () => {
	return (
		<div className='contant-container'>
			<h2>How to reach me</h2>
			<p>Nathalie Tu</p>
			<div className='social-links'>
				<a href='https://www.linkedin.com/in/nathalie-tu/'>
					<img src={linkedinIcon} alt='Linkedin icon' />
				</a>
				<a href='https://github.com/ohitsnathalie/'>
					<img src={githubIcon} alt='Github icon' />
				</a>
				<a href='https://www.instagram.com/ohitsnathalie/'>
					<img src={instagramIcon} alt='Instagram icon' />
				</a>
			</div>
		</div>
	)
}
