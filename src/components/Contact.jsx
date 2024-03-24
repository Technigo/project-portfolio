import "../styling/contact.css"
import linkedinLogo from "../assets/linkedin-grey.svg"

export const Contact = () => {
	return (
		<div className='contant-container'>
			<h2>How to reach me</h2>
			<p>Nathalie Tu</p>
			<div className='social-links'>
				<a href='https://www.linkedin.com/in/nathalie-tu/'>
					<img src={linkedinLogo} alt='Linkedin icon' />
				</a>
			</div>
		</div>
	)
}
