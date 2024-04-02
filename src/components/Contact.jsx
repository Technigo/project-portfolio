import './Contact.css'
import myImage from '/image.me.png'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const linkedIn = 'https://www.linkedin.com/in/sofie-ferrari-strahl-495486214/'
const gitHub = 'https://github.com/sofieFerrari/'
const stackOverflow =
	'https://stackoverflow.com/?newreg=8b65c5afadcd4e8e91911a588ebfb480'
  const instagram = 'https://www.instagram.com/thorleifs_as/'

export const ContactMe = () => {
	return (
		<>
			<div className="contact-section">
				<h1>Let's talk</h1>
				<img src={myImage} alt="Sofie"></img>
			</div>
			<div className="contact-text">
				<h2>Sofie Ferrari Strahl</h2>
				<h2>0709 900 926</h2>
				<h2>Sofiestrahl@gmail.com</h2>
			</div>
			<div className="contact-buttons">
				<a href={linkedIn}>
					<button className="link-btn">
						<FaLinkedinIn />
					</button>
				</a>
				<a href={gitHub}>
					<button className="link-btn">
						<FaGithub />
					</button>
				</a>
				<a href={stackOverflow}>
					<button className="link-btn">
						<FaStackOverflow />
					</button>
				</a>
				<a href={instagram}>
					<button className="link-btn">
						<GrInstagram />
					</button>
				</a>
			</div>
		</>
	)
}
